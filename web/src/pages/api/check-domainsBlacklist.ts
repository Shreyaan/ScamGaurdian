// pages/api/check-domains.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Pool, QueryResult } from "pg";
import "dotenv/config";

let password = process.env.passwordblocklist;

// PostgreSQL connection pool configuration
const poolConfig = {
  host: "ep-curly-forest-53978599-pooler.us-east-2.aws.neon.tech",
  database: "neondb",
  user: "Shreyaan",
  password: password,
  ssl: { rejectUnauthorized: false },
};

// Create the connection pool
const pool = new Pool(poolConfig);

// Define your domain interface to match the table schema
interface Domain {
  "domain-name": string;
  "is-blacklisted": boolean;
}

// POST /api/check-domains
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Domain[] | {}>
) {
  try {
    const { domains }: { domains: string[] } = req.body;

    // Use a client from the connection pool
    const client = await pool.connect();

    // Generate a string with placeholders for the domains
    const domainPlaceholders = domains
      .map((_, index) => `$${index + 1}`)
      .join(",");

    // Create an array with domain names and their corresponding indices
    const indexedDomains = domains.map((domain, index) => ({
      name: domain,
      index: index + 1,
    }));

    // Execute the SELECT query with the given domains and order by the original indices
    const result: QueryResult<Domain> = await client.query(
      `
      SELECT d."domain-name", COALESCE(b."is-blacklisted", false) as "is-blacklisted"
      FROM (
        SELECT UNNEST(ARRAY[${domainPlaceholders}]::text[]) AS "domain-name"
      ) AS d
      LEFT JOIN domains AS b ON d."domain-name" = b."domain-name"
      ORDER BY d."domain-name";
      `,
      indexedDomains.map((domain) => domain.name)
    );

    // Release the client back to the pool
    client.release();

    // Send the query result as the API response
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching domains:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
