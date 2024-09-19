import { neon } from "@neondatabase/serverless";

export default async function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Neon Database URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  return sql;
}
// "use server";

// import { neon } from "@neondatabase/serverless";

// import { neon } from "@neondatabase/serverless";

// export async function getData() {
//     const sql = neon(process.env.DATABASE_URL);
//     const data = await sql`...`;
//     return data;
// }
