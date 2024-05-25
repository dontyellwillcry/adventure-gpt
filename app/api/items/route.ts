import pool from "@/utils/DB";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await pool.query(`SELECT * FROM "items";`);
    if (result.status < 200 || result.status >= 300) {
      throw new Error("Network response was not ok");
    }
    return NextResponse.json({ data: result.rows });
    
  } catch (error) {
    console.error("Error with query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



