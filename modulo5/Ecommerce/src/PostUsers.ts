import { Request, Response }from "express"
import { connection } from "./data/connection"
import { Labecommerce_users,users } from "./types"



export const postUsers = async(req: Request, res: Response):Promise<void> => {
   let codeError = 400
   
   try {
       const userName = req.headers.authorization

       if(!userName){
           res.status(401).end
       }
       
       const {id,name,email,password} = req.body

       if(!name || !email || !password){
           throw new Error("Preencha as Informações corretamente");
           
       }

                
     

await connection("labecommerce_users").insert({
   id:Math.floor(Math.random() * 10 + 1),
   name:name,
   email:email,
   password:password
})
      

      res.status(200).send({message:"Usuário cadastrado com sucesso",users})       
   
   } catch(error:any) {
      res.status(codeError).send(error.message)
   }

}



