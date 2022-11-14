import { Request, Response } from "express"
import { connection } from "../../data/connection"



export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
      let name = req.query.name as string
       const users = await connection("aula48_exercicio")
       .where("name","like",`%${name}%`)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Usuário não encontrado")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }