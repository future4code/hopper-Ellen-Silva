export class User {
   public id: string
   public email: string
   public password: string

   constructor(id:string, email:string, password:string){
    this.id = id,
    this.email = email,
    this.password = password
   }

   getUsers(){
    return this.id
   }
}

const user1 = new User("1", "ellen.ls@hotmail.com", "123")
console.log(user1)