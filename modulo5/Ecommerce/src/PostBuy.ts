import { Request, Response }from "express"
import { connection } from "./data/connection"
import { labecommerce_purchases,buy, products, users} from "./types"



export const postBuy = async(req: Request, res: Response): Promise<void> => {
   let codeError = 400
   
   try {
    
    const userBuy = req.headers.authorization

       if(!userBuy){
           res.status(401).end
       }
       
       const {id,user_id,product_id,quantity, total_price} = req.body

       if(!user_id || !product_id|| !quantity){
           throw new Error("Preencha as Informações corretamente");
           
       }
      
                   
const price = await connection.raw(`
SELECT price FROM labecommerce_products
 JOIN products ON product_id = products.id,
 JOIN users ON user_id = users.id
`)

await connection("labecommerce_purchases")
.insert({
   id:Math.floor(Math.random() * 10 + 1),
   user_id,
   product_id,
   quantity,
   total_price:(quantity * price)
   })
     
       res.status(200).send({message:"Produto comprado com sucesso",buy})       
   
   } catch(error:any) {
      res.status(codeError).send(error.message)
   }

}