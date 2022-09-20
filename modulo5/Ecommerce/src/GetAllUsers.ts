import { Request, Response }from "express"
import { users } from "./types"


export const getAllUsers =(req: Request, res: Response) => {
   let codeError = 400
   
   try {
              
   res.status(200).send(users)
       
   
   } catch(error:any) {
      res.status(codeError).send(error.message)
   }

}

