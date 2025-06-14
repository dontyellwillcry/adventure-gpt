import pool from "@/utils/DB";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const result = await pool.query(`SELECT * FROM "items";`);
    return NextResponse.json({ sysContent: result.rows }); // insted of returning result.rows directly, we wrap it in an object with sysContent key
  } catch (error) {
    console.error("Error with query", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) { // 
  const body = await req.json();
  try {
    const queryText = `INSERT INTO "items" (item_name, item_description, special_ability)
    VALUES ($1, $2, $3);`;
    const queryParams = [body.item_name, body.item_description, body.special_ability];

    const result = await pool.query(queryText, queryParams);
    return NextResponse.json({ data: result.rows });
  } catch (error) {
    console.error("Error with query", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
