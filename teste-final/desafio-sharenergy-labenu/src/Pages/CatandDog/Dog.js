import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Div, Button, Dogs, Img} from "./DogStyled" 

const URL = "https://random.dog/woof.json"
const getRandomDog = async() =>{
    const response = await fetch(URL)
    const body = await response.json()
    return body.url
}

const Dog = ()=>{
    const navigate = useNavigate()
    const[dogList, setDogList] = useState(null)

    const onClick = async()=>{
        const url = await getRandomDog()
        setDogList(url)
    }


    useEffect(()=>{
       
          onClick()  
            
    },[])

    console.log(dogList)
    
    return (
        <div>
        <Button onClick={()=>navigate("/cadastro")}>Cadastrar</Button>
        <Button onClick={()=>{navigate("/")}}>Voltar</Button>
        <Div>
         <Dogs>
        <h1>Cachorros</h1>
        </Dogs>               
        <Img src={dogList}></Img>
        <Button value={dogList} onClick={onClick}>Refresh</Button>
        
        
        
        </Div>
        </div> 
    )
}

export default Dog