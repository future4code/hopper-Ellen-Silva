import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { type, userInfo } from 'os';
import { User, users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/users', (req: Request, res: Response)=>{
  let errorCode = 400
  try{
   const {name, cpf, birthday, balance, extract} = req.body
   
   if(!name ||!cpf || !birthday){
      errorCode = 422
      throw new Error("Preencha todas as informações corretamente");
}

const date = new Date();
const formatedDate = Number(date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear())
const birthDate = Number(birthday)
const age = (formatedDate - birthDate)
   
   if(age < 18){
    errorCode = 403
    throw new Error("Idade não permitida, sua idade é inferior a 18 anos");
    
   }

  const user = users.find((c)=>{
    return c.cpf === cpf

  })
   
  if(user){
    errorCode = 409
    throw new Error("CPF ja cadastrado");
    
  }
  
  const newExtract = {
    value:0, date:'31/08/2022',description:'extrato inicial'
  }

 
    const newUser : User = {
      id: Math.random(),
      name: name,
      cpf: cpf,
      birthday: birthday,
      balance: balance,
      extract:[newExtract],
    }

    users.push(newUser)

    res.status(errorCode).send({message: "Usuário criado com sucesso!", users})
      
  }catch (error:any){
   res.status(errorCode).send(error.message)

  }
})

app.get('/users/saldo', (req:Request , res:Response)=>{
  let errorCode = 422
  try{
    const userName = req.query.name;
    const userCPF = req.query.cpf;

    if(!userName || !userCPF){
      errorCode = 422;
      throw new Error("usuário não encontrado");
      
    }
    
    const userSaldo = users.find(u => u.cpf === userCPF)
    
    let saldoPesquisado = `Seu saldo atual é ${userSaldo?.balance}`
    
    res.status(200).send({saldoPesquisado})

  }catch (error:any){
    res.status(errorCode).send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});