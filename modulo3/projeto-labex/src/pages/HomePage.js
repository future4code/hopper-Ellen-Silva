import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import tela from "../components/img/telaFundo.gif";
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
` 
const Nav = styled.nav`
background-image:url(${tela});
background-size:45%;
width:100%;
height:89vh;
`
const Botao = styled.button`
border-radius:5px;
border:none;
width:90px;
height:40px;
margin: 200px 20px;
background-color:rgba(159,112,213,0.8575805322128851);
cursor: pointer;

`
const Imagem = styled.img`
width:60px;
`





function HomePage(){

    const navigate = useNavigate();
return (

    <div>
        <Header>
            <H2>Labex</H2>
            <div>
            <Imagem src={logo}></Imagem>
            </div>
            
        </Header>

        <Nav>
            <Botao onClick={()=> navigate("/trips/list")}>Viagens</Botao>
            <Botao onClick={() => navigate("/login")}>Area de Adm</Botao>
        </Nav>

    </div>
)
   

}

export default HomePage