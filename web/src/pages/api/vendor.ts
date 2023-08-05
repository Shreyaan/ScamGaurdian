// pages/api/vendor.js
import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
import 'dotenv/config'

let password = process.env.passwordvendor;

const pool = new Pool({
  host: "ep-square-rice-81489989-pooler.us-east-2.aws.neon.tech",
  database: "neondb",
  user: "shreyaans20",
  password: password,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { vendorName } = req.query;

      const client = await pool.connect();
      const result = await client.query(
        `SELECT * FROM vendor_info WHERE vendorName = $1`,
        [vendorName]
      );

      client.release();

      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: "Vendor not found" });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
