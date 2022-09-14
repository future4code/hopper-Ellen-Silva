import { connection } from "../../data/connection"



export default async function selectSorte():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}