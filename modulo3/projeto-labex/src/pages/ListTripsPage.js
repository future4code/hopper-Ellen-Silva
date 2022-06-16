import {useNavigate} from "react-router-dom"
import styled from "styled-components";

const Header = styled.header`
display:flex;
justify-content:space-between;
background: rgb(17,14,73);
background: linear-gradient(90deg, rgba(17,14,73,1) 0%, rgba(101,57,189,1) 37%, rgba(159,112,213,0.8575805322128851) 100%);
padding-left:20px;
padding-right:20px;
align-items:center;
`
const H2 = styled.h2`
color:gray;
cursor: pointer;
`
const Nav = styled.nav`
display:flex;
flex-direction:column;
background-color:#E6E6FA;
width:100%;
height:100vh;
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

function ListTripsPage(){
    const navigate = useNavigate();


    return(

        <div>
        <Header>
            <H2 onClick={() => navigate("/")}>Labex</H2>
           
        </Header>
        <div>
            <Nav>
        <h2>Lista de viagem</h2>

        <Botao onClick={()=> navigate("/trips/application")}>Começar sua viagem</Botao>
        </Nav>
        </div>
        
        </div>
    )
}



export default ListTripsPage;
