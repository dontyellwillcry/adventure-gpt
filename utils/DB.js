import { Pool } from "pg";

const pool = new Pool ({
    host: "localhost",
    port: 5432,
    database: "adventure_gpt"
})

export default pool;