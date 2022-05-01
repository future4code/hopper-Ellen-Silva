
import React from 'react';
import styled from 'styled-components'


const MainContainer = styled.div`
display:flex;
flex: 1 1 0%;
flex-direction:column;
justify-content: flex-end;
margin:auto;
height:97vh;
width:70vh;
margin-left:25%;
background-color:#5f9ea0;
border-style:solid;
border-color:#008080;
border-radius:2%;
`
const InputUsuario = styled.input`
background-color:#e6e6fa;
width: 20%;


`
const InputsMensagem = styled.input`
background-color:#e6e6fa;
width: 60%;

` 
const Mensagem = styled.div`
background-color:#66cdaa;
display:flex;
flex: 1 1 0%;
justify-content: flex-end;
flex-direction:column;
margin-bottom:5px;
padding-left:10px;
height:90vh;
border-radius:2% 2% 0 0;
border-bottom:2px solid #008080;

` 


const Button = styled.button`
background-color:#4682b4;
border:none;
border-radius:10%;
padding:4px;
margin-bottom:3px;
margin-left:10px;

`







class App extends React.Component{

  state = { 
    mensagem:[
      {nomeDoUsuario: "",
      mensagemUsusario:""
    },
  
  
],
nomeInput : "",
mensagemInput : ""
};
    adicionarMensagem = ()=>{
    const addMensagem={
      nomeDoUsuario:this.state.nomeInput,
      mensagemUsusario:this.state.mensagemInput
    }
    const novaMensagem = [addMensagem, ...this.state.mensagem]

    this.setState({mensagem:novaMensagem,mensagemInput:""})
  };
    

  onChangeNome = (event)=>{
    this.setState({nomeInput:event.target.value})


  }

  onChangeMensagem = (event)=>{
    this.setState({mensagemInput:event.target.value})

  }
  
  
 
  render(){

   const campoDeMensagem = this.state.mensagem.map((conversa)=>{
     return(<p><b>{conversa.nomeDoUsuario}</b>  {conversa.mensagemUsusario}</p>)


   }) 
    
  
    return (

      
      <MainContainer>

        <Mensagem>{campoDeMensagem}</Mensagem>
        <div>
        <InputUsuario input placeholder='Nome' value={this.state.nomeInput} onChange={this.onChangeNome}/>
        <InputsMensagem input placeholder='Mensagem' value={this.state.mensagemInput} onChange={this.onChangeMensagem}/>
        <Button onClick={this.adicionarMensagem}>Enviar</Button>
        </div>
        
  
      </MainContainer>
    );
  }
}


 


export default App;
