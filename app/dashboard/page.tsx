
import getDbConnection from "@/lib/db";


export default async function Dashboard() {
  const psql = await getDbConnection();

  
const response = await psql `SELECT `

  return <section>Dashboard{response[0].version}</section>
}

   