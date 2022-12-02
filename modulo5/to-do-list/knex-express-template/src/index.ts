import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Usuarios } from "./types";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());


app.post("/user", async (req:Request , res:Response)=>{
let errorCode = 400

try {
  const {name, nickname, email} = req.body

  if(!name || !nickname || !email){
    throw new Error("Preencha todas as informações corretamente")
  }
  
  const novoUsuario:Usuarios = {
    id: Date.now(),
    name: name,
    nickname: nickname,
    email: email
  }
  await connection.raw(`
  INSERT INTO Usuarios(id, name, nickname, email)
  
  VALUES(${novoUsuario.id},"${novoUsuario.name}","${novoUsuario.nickname}","${novoUsuario.email}")
          
  `)

  res.status(200).send("Usuario criado com sucesso!")
  
}catch(error:any){
  res.status(errorCode).send(error.message)
 
}
})

app.get("/user/:id", async (req:Request , res: Response)=>{
  let errorCode = 400

  try {

    const idUser = Number(req.params.idUser)
    const {nickname, id} = req.body

    if(!nickname || !id){
      throw new Error("Preencha todas as informações corretamente")
    }
    if(idUser){
      const pegarUsuario = await connection.raw(`
    
    SELECT * FROM Usuarios
    WHERE id = "${idUser}"
    `)
    res.status(200).send(pegarUsuario[0])
    }
    
     
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }

})

app.put("/user/edit/:id", async (req:Request , res:Response)=>{
  let errorCode = 400

  try {
    const id = Number(req.params.id)
    const editUser = Number(req.body.editUser)

    if(!editUser){
      throw new Error("É preciso passar um novo nome!");
      
    }

    await connection.raw(`
    UPDATE Usuarios
    SET ${editUser}
    WHERE id = ${id} 
    `)
    res.status(200).send("Usuario alterado com sucesso!")
    
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})

  const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app