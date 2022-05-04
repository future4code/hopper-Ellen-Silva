import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import EtapaFinal from './Components/EtapaFinal';
import Styled from 'styled-components';
import styled from 'styled-components';

const Fundo = styled.div`
background-color:	#4682B4;
text-align:center;
width:25vw;
height:450px;
margin-left:500px;
border-radius:2%;

`


const PrimeiraParte = styled.button`
background-color:#87CEEB;
border:none;
border-radius:5%;
width:20vh;
height:5vh;
margin-top:20px;
cursor: pointer;

`


class App extends React.Component{

  state = {
    etapa: 1,
    


  }

  trocaEtapa=()=> {
    if(this.state.etapa <=3){
      this.setState({etapa: this.state.etapa + 1})

    }
    
    
    
    
  }

render() {
  
  let etapaTroca;
  
  switch(this.state.etapa){
    case 1:
      etapaTroca = <Etapa1/>
      break

    case 2:
      etapaTroca = <Etapa2/>
      break

    case 3:
      etapaTroca = <Etapa3/>
      break
    
    case 4:
      etapaTroca = <EtapaFinal/>
      break
  }

   return (
    <Fundo>
      {etapaTroca}
   
    <PrimeiraParte onClick={this.trocaEtapa}>Proxima etapa</PrimeiraParte>
          
    </Fundo>
  );
}
}
export default App;
