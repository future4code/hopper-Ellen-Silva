import { Request, Response }from "express"
import { Labecommerce_users,users } from "./types"



export const postUsers = (req: Request, res: Response) => {
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

       const user = users.find((use)=>{
          return use.id === id
        })

        if(!users){
           throw new Error("Usuário não encontrado");
           
        }
              
     

const newUser: Labecommerce_users = {
   id:Date.now(),
   name:name,
   email:email,
   password:password
   

}

       users.push(newUser)
       res.status(200).send({message:"Usuário cadastrado com sucesso",users})       
   
   } catch(error:any) {
      res.status(codeError).send(error.message)
   }

}



