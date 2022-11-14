import { Request, Response } from "express"
import { connection } from "../../data/connection"



export const getAllSorte = async(req: Request,res: Response): Promise<void> =>{
    try {
      let email = req.query.email as string
      let sort = req.query.sort as string
      let order = req.query.order as string

      if(!email){
        email = "%"
      }
       const emails = await connection("aula48_exercicio")
       .where("email","like",`%${email}%`)
       .orderBy(sort, order)
 
       if(!email.length){
          res.statusCode = 404
          throw new Error("Ordenação errada")
       }
 
       res.status(200).send(emails)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }