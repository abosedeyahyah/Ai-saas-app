import { neon } from "@neondatabase/serverless";

export default async function getDbConnection() {
 
  if (!process.env.DATABASE_URL) {
    throw new Error("Neon Database URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  return sql;
}
// const result = await sql`
// SELECT *
// FROM information_schema.tables 
// WHERE table_schema = 'public';
// `;

