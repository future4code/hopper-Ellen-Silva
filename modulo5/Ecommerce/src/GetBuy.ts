import { Request, Response }from "express"
import { users } from "./types"


export const getBuy =(req: Request, res: Response) => {
   let codeError = 400
   
   try {

    const search = req.params.user_id
              
   res.status(200).send(search[0])
       
   
   } catch(error:any) {
      res.status(codeError).send(error.message)
   }

}