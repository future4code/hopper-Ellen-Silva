
import React from 'react';
import './App.css';
import TelaCadastro from './components/telaCadastro';
import TelaLista from './components/telaLista';


class App extends React.Component {

  state = {
    telaAtual:"cadastro"
  }
  trocaDeTela = () =>{
    this.setState({telaAtual: this.state.telaAtual === "cadastro"
    ? "lista" 
    : "cadastro"})
    
  
    
  
  } 

  render(){
    return(

      <div>{
        this.state.telaAtual === "cadastro" 
        ? <TelaCadastro troca={this.trocaDeTela}/> 
        : <TelaLista troca={this.trocaDeTela}/>
        }
        
      </div>
    )
  }
}

export default App;
