import React from "react";
import styled from "styled-components";

const Header = styled.header `
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
` 
const Nav = styled.nav`
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





function HomePage(){
return (
    <div>
        <Header>
            <H2>Labex</H2>
            <div>
                <p>Menu</p>
            </div>
        </Header>

        <Nav>
            <Botao>Viagens</Botao>
            <Botao>Area de Adm</Botao>
        </Nav>

    </div>
)
   

}

export default HomePage