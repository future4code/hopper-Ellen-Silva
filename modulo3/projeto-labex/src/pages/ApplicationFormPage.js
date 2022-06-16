import { useNavigate } from "react-router-dom"
import styled from "styled-components";


const Header= styled.header`
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

function ApplicationFormPage() {
    const navigate = useNavigate();


    return (
        
        
        
        <div>
        <Header>
            <H2 onClick={() => navigate("/")}>Labex</H2>
           
        </Header>
            
            <Nav>
           
            <h2>forma de aplicar</h2>



            <div>

                <form>
                    Nome:<input></input><br />


                    Gênero: <br />
                    <input type="radio" name="sex" value="male" /> Masculino<br />

                    <input type="radio" name="sex" value="female" /> Feminino<br />
                </form>

                Onde gostaria de explorar?

                <select>
                    <option></option>
                    <option>Marte</option>
                    <option>Saturno</option>
                    <option>Mercurio</option>
                    <option>Vênus</option>


                </select><br />
                Idade:<input type="number" ></input><br/>

                <Botao type="submit" value="Enviar">Enviar</Botao>
                
            </div>
            </Nav>
        </div>
        
    )
}



export default ApplicationFormPage;
