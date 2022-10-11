import { UserDatabase } from "../data/Userdatabase"; 


export class userBusiness{
    public createUser = async(input:any)=>{

        try{
            const{name,email,password} = input
    
            if(!name || !email || !password ){
                throw new Error("Please fill all the fields");
            }
    
            if(email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }
    
            if(password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }
    
            const id: string = Date.now().toString();
          
            await new UserDatabase().insertUser({id, email, name, password});
         
            
        }catch(error:any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }
    async get(){
				
        return await new UserDatabase();
    }
    
}

    


