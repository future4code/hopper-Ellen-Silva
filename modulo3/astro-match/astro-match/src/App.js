
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import TelaLista from './components/TelaLista';
import TelaInicial from './components/TelaInicial'


function App() {

  const[trocaTela,setTrocaTela]= useState("telaInicial")

 
  function trocarTela(){
   setTrocaTela(trocaTela === "telaInicial" ? "lista" : "telaInicial") 
    
 }

  return (
    

    <div className="App">
      

      {trocaTela === "telaInicial"? <TelaInicial trocar={trocarTela}/>: <TelaLista trocar={trocarTela}/>  }

    
    </div>
  );
}

export default App;
