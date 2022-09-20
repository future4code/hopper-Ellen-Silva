import { Request, Response }from "express"
import { labecommerce_products,products} from "./types"



export const postAllProducts = (req: Request, res: Response) => {
   let codeError = 400
   
   try {
       const userProducts = req.headers.authorization

       if(!userProducts){
           res.status(401).end
       }
       
       const {id,name,price,image_url} = req.body

       if(!name || !price|| !image_url){
           throw new Error("Preencha as Informações corretamente");
           
       }

       const product = products.find((produ)=>{
          return produ.id === id
        })

        if(!products){
           throw new Error("Produto não encontrado");
           
        }
              
     

const newProducts: labecommerce_products = {
   id:Date.now(),
   name:name,
   price:price,
   image_url:image_url
   

}
       products.push(newProducts)
       res.status(200).send({message:"Produto cadastrado com sucesso",products})       
   
   } catch(error:any) {
      res.status(codeError).send(error.message)
   }

}