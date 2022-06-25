import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../components/img/naveLogo.png";

const Header = styled.header`
display:flex;
justify-content:space-between;
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
const Botao = styled.button`
border-radius:5px;
border:none;
width:90px;
height:40px;
margin: 20px;
background-color:rgba(159,112,213,0.8575805322128851);
cursor: pointer;

&:hover {
    background-color:rgba(101,57,189,1) ;
  }


`
const Cards = styled.p`
background-color:rgba(159,112,213,0.8575805322128851);
margin-left:400px;
padding-top:20px;
width:500px;
height:20vh;
box-shadow:5px 5px 5px gray;

`
const Imagem = styled.img`
width:60px;
`

function ListTripsPage() {
    const navigate = useNavigate();
    const [viagem, setViagem] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips?auth=ellen-lime-hopper")
            .then((response) => {
                setViagem(response.data.trips)
                console.log(response.data.trips)

            }, [])
    })


    return (

        <div>
            <Header>
                <H2>Labex
                <Imagem src={logo}></Imagem>
                </H2>
                
                <Botao onClick={() => navigate("/")}>Voltar</Botao>

            </Header>
            <div>
                <Nav>

                    <div>
                        <Botao onClick={() => navigate("/trips/application")}>Começar sua viagem</Botao>
                    </div>
                    <h2>Lista de viagem</h2>


                    <div>

                        {viagem.map((viagens) => {
                            return <Cards><b>Data: </b>{viagens.date}<br />
                                <b>Descrição: </b>{viagens.description}<br />
                                <b>Duração: </b>{viagens.durationInDays} dias<br />
                                <b>Viagem: </b>{viagens.name}<br />
                                <b>Planeta: </b>{viagens.planet}

                            </Cards>



                        })}
                    </div>


                </Nav>
            </div>

        </div>
    )
}



export default ListTripsPage;
