import axios from "axios"
import { useEffect, useState, Fragment } from "react"
import { useNavigate } from "react-router-dom"
import EditarUsuario from "./components/EditarUsuario"
import VerUsuario from "./components/VerUsuario"
import { Div, Input, Button,Table, Cadastro, Form} from "./CadastrarStyled"


const CadastrarCliente = ()=>{
    
    const navigate = useNavigate()

    const[userList,setUserList] = useState([])
    const[user,setUser] = useState([])
    const[onEdit, setOnEdit] = useState(null)
    const[editUser, setEdituser] = useState([])
    

    const handleAddChange = (value)=>{
        
      
      setUserList((prevValue) =>({
        ...prevValue,
        [value.target.value]:value.target.value
       }))
    } 
    console.log(userList)

    const handleEditChange = (event)=>{
      event.preventDefault()
      const campoNome = event.target.getAttribute("name")
      const campoValor = event.target.value

      const newFormData = {...editUser}
      newFormData[campoNome] = campoValor

      
      
    }
    const salveUser = (user)=>{
      axios.post("http://localhost:3001/cadastro",{
        name:user.name,
        email:user.email,
        phone:user.phone,
        cpf:user.cpf
    })
    .then((response)=>{

    })
    }

    const editarUser = (user)=>{
      axios.put("http://localhost:3001/editar",{
        id:user.id,
        name:user.name,
        email:user.email,
        phone:user.phone,
        cpf:user.cpf
    })
    .then((response)=>{

    })
      

    }

    const deletarUser = (id)=>{
      axios.delete(`http://localhost:3001/excluir/${id}`)
      .then((response)=>{
        console.log(response)
      })
    }

    const handleAddForm = (event)=>{
      // event.preventDefault();

      const newUser = {
       
        name:event.target.name.value,
        email:event.target.email.value,
        phone:event.target.phone.value,
        cpf:event.target.cpf.value,
      }
      salveUser(newUser)

      const newUsers = [...user,newUser]
      setUser(newUsers)
    }

    const handleEditFormSubmit = (event)=>{
      const editedUser = {
        id:event.target.id.value,
        name:event.target.name.value,
        email:event.target.email.value,
        phone:event.target.phone.value,
        cpf:event.target.cpf.value
      }
      editarUser(editedUser)
    }
    

    const handleEditClick = (event,value)=>{
      event.preventDefault()
      setOnEdit(value.id)

      const formValues = {
        name:value.name,
        email:value.email,
        phone:value.phone,
        cpf:value.cpf
      }

      setEdituser(formValues)

    }

    const handleCancelClick = ()=>{
      setOnEdit(null)
    }

    const handleDeleteClick = (id)=>{
          deletarUser(id)
    }
   

    useEffect(()=>{
      axios.get("http://localhost:3001/getCadastro")
      .then((response)=>{
        setUser(response.data)
        console.log(response.data)
      })
    },[])
  
    return (
        <Div>
        <Cadastro>
        <h1>Cadastro</h1>
        </Cadastro>
        
      <Form onSubmit={handleAddForm}>
        
        <Input name="name" onChange={handleAddChange} placeholder="Nome"></Input>
        <Input name="email" onChange={handleAddChange} placeholder="Email"></Input>
        <Input  name="phone" onChange={handleAddChange} placeholder="Telefone"></Input>
        <Input name="cpf" onChange={handleAddChange} placeholder="CPF"></Input>
        <Button type="submit" >Cadastrar</Button>
      </Form>
      
      <form onSubmit={handleEditFormSubmit}>
      <Table>
      <thead>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>CPF</th>
      </thead>
      <tbody>
        {user.map((value,index)=>(
      <Fragment key={index}>
        {onEdit === value.id
        ?(<EditarUsuario onEdit={onEdit} handleEditChange={handleEditChange} data={value} handleCancelClick={handleCancelClick}/>)
        :<VerUsuario value={value} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
  
      </Fragment>  
       
          
        ))}  
      </tbody>
      </Table>
      </form>
        
                
        <Button onClick={()=>{navigate("/")}}>Voltar</Button>
        
        
        </Div>

    )
}

export default CadastrarCliente 