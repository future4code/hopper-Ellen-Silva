import { Request, Response } from "express"
import { connection } from "../../data/connection"



export const getAllTypes = async(req: Request,res: Response): Promise<void> =>{
    try {
      let type = req.params.type as string
       const users = await connection("aula48_exercicio")
       .where("type","like",`%${type}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Tipo não encontrado")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }