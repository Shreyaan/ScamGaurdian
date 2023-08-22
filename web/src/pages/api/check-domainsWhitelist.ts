// pages/api/check-domains.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Pool, QueryResult } from "pg";
import 'dotenv/config'

let password = process.env.passwordvendor;

const pool = new Pool({
  host: "ep-square-rice-81489989-pooler.us-east-2.aws.neon.tech",
  database: "neondb",
  user: "shreyaans20",
  password: password,
  ssl: { rejectUnauthorized: false },
});

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
    const domainPlaceholders = domains.map((_, index) => `$${index + 1}`).join(",");

    // Create an array with domain names and their corresponding indices
    const indexedDomains = domains.map((domain, index) => ({
      name: domain,
      index: index + 1,
    }));

    // Execute the SELECT query with the given domains and order by the original indices
    const result: QueryResult<Domain> = await client.query(
      `
      SELECT d."domain-name", COALESCE(b."is-whitelisted", false) as "is-whitelisted"
      FROM (
        SELECT UNNEST(ARRAY[${domainPlaceholders}]::text[]) WITH ORDINALITY AS d("domain-name", index)
      ) AS d
      LEFT JOIN domains AS b ON d."domain-name" = b."domain-name"
      ORDER BY d.index;
      
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
