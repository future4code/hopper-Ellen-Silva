import { userBusiness } from "../business/userBusiness";
import { Request, Response } from "express";


export const createUser = async(req: Request, res: Response)=>{
       
    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const UserBusiness = new userBusiness()

        await UserBusiness.createUser(input)

        res.status(201).send({ message: "Usuário criado!" });

    } catch (error:any) {
        res.status(400).send({ error: error.message });
    }
}

export const get = async (req: Request, res: Response) => {
    
    try {

        const users = await new userBusiness().get();

        res.send(users).status(200);

    } catch (error:any) {
        res.send({ message: error.message }).status(error.status);
    }
}
    


