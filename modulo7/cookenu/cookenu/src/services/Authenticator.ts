import * as jwt from "jsonwebtoken"
import { CustomError, Unauthorized } from "../error/customError"
import { AuthenticationData } from "../model/user"

export class Authenticator {
    public generateToken = ({id}: AuthenticationData) =>{
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: "20min"}

        )
        return token

    }

    getTokenData = (token:string):AuthenticationData =>{
        try{
            const payload = jwt.verify(token, process.env.JWT_KEY as string)as AuthenticationData
            return payload
        }catch(error:any){
            console.log(error.message)
            throw new Unauthorized()
        }
       
        
    }
}