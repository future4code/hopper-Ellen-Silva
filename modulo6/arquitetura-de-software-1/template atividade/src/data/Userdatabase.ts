import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/typeUsers";

export class UserDatabase extends BaseDatabase{

    public insertUser =  async (user:user)=>{
        await UserDatabase.connection.insert({
            id: user.id,
            name:user.name,
            email:user.email,
            password:user.password
        }).into("User_Arq")
    }

    public getUser = async (user:user[]) => {

        try {
    
            const users: user[] = [];
    
            const result = await BaseDatabase.connection
                .select("*")
                .from("User_Arq");
    
                        for(let user of result){
                                users.push(user);
                        }
    
            return users;
    
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}