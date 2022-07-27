import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logo from "../components/img/naveLogo.png";

const Header = styled.header`
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
const Imagem = styled.img`
width:60px;
`




function TripDetailsPage() {

    const navigate = useNavigate()
    const [detalhe, setDetalhe] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            navigate("/")
        }


    }, [navigate])

    useEffect(() => {
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id?=auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTU5NDIyMjZ9.tZIl8z5XW7rWe6lVy-9HDeRvfr24iw1iD4vV3P20qZM"
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        axios.get(URL, headers)
            .then((response) => {
                setDetalhe(response.data.trip)
                console.log(response.data.trip)

            }).catch((error) => {
                console.log(error.response)

            })
    }, [])


    return (
        <div>
            <Header>
                <H2 onClick={() => navigate("/")}>Labex</H2>
                <div>
                    <Imagem src={logo}></Imagem>
                </div>

            </Header>

            <Nav>
                <h2>Detalhes de viagem</h2>
                {/* <div>
                    {detalhe.map((detalhes) => {
                        return <p>{detalhes.age}</p>
                    })}
                </div> */}
            </Nav>

        </div>
    )
}



export default TripDetailsPage;
