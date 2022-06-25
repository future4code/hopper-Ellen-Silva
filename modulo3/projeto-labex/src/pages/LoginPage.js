import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../components/img/naveLogo.png";

const Header = styled.header `
display:flex;
background: rgb(17,14,73);
background: linear-gradient(90deg, rgba(17,14,73,1) 0%, rgba(101,57,189,1) 37%, rgba(159,112,213,0.8575805322128851) 100%);
padding-left:20px;
padding-right:20px;
align-items:center;
font-family: 'Press Start 2P', cursive;
`
const H2 = styled.h2`
color:white;
cursor: pointer;
` 
const Nav = styled.div`
display:flex;
flex-direction:column;
background-color:#E6E6FA;
width:100%;
height:100vh;

`
const Enviar = styled.button`
border-radius:5px;
border:none;
width:90px;
height:40px;
margin-left:48%;
background-color:rgba(159,112,213,0.8575805322128851);
cursor: pointer;

`

const Imagem = styled.img`
width:60px;
`
const Inputs = styled.input`
width:20%;
margin-left:40%;
margin-bottom:10px;


`

function LoginPage(){
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) =>{
        setSenha(event.target.value)
    }

    const Botao= ()=>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login?auth=ellen-lima-hopper"
        const body = {
            email:email,
            password:senha

        }
        axios
        .post(URL,body)
        .then((response)=>{
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/:id")

        })
        .catch((err)=>{
            console.log(err.response.data);

        })
    
        console.log(email,senha)
    }


    return(
        <div>
        <Header>
        <H2 onClick={() => navigate("/")}>Labex</H2>
            <div>
            <Imagem src={logo}></Imagem>
            </div>
            
        </Header>


        <Nav>
            
        <h2>Pagina de login</h2>

        <Inputs placeholder="email" value={email}onChange={onChangeEmail}></Inputs>
        <Inputs placeholder="senha" type="password" value={senha} onChange={onChangeSenha}></Inputs>
        <Enviar onClick={Botao}>Enviar</Enviar>
        </Nav>
        </div>
        
        
    )
}



export default LoginPage;
