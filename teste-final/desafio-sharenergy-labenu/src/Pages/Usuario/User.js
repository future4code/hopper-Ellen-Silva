import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Div, Input,Button, Usuario, Info, Imagem, P,ButtonPag } from "./UserCSS"

const User = ()=>{

    const navigate = useNavigate()

    const[userList,setUserList] = useState([])
    const[page, setPage] = useState(10)
    const[currentPage, setCurrentPage] = useState(0)
    const[search, setSearch] = useState("")
    

    const pages = Math.ceil(userList.length / page)
    const startIndex = currentPage * page
    const endIndex = startIndex + page
    const currentIndex = userList.slice(startIndex, endIndex)

    
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=50')
        .then((response)=>{
            setUserList(response.data.results)
        })
    },[])

    console.log(userList)

    const filtrar = currentIndex.filter((person)=> 
    person.login.username.includes(search.toLowerCase())|| person.email.includes(search.toLowerCase()) || person.name.first.includes(search.toLowerCase()))  
    
    return (
        <div>
           <Button onClick={()=>{navigate("/")}}>Voltar</Button>
           <Button onClick={()=>{navigate("/cat")}}>Gatos</Button>
        
        <Div>
            
        <Usuario>   
        <h1>usuários</h1>
        </Usuario>
        <Input type="text" placeholder="Pesquisar" value={search} onChange={(event)=>setSearch((event.target.value))}></Input>
        
        {currentIndex && filtrar.map((list, index)=>{
            return <Info key={index}>
                <Imagem src={list.picture.large}></Imagem>
                <div>
                <P>Username: {list.login.username}</P> 
                <P>Name: {list.name.first} {list.name.last}, {list.dob.age}</P> 
                <P>Email: {list.email}</P>
                </div>
               
             </Info>
        })}
       
          
        
        <div>{Array.from(Array(pages),(item,index)=>{
                return <ButtonPag  value={index} onClick={(event)=>setCurrentPage(Number(event.target.value))}>{index + 1}</ButtonPag>
            })}</div>
            </Div>
        </div>

    )
}

export default User