import React from "react";
import axios from "axios";


class TelaCadastro extends React.Component{

    state = {
        nome:"",
        email:""
    }

    valorNome = (event) =>{
        this.setState({nome:event.target.value})
    }

    valorEmail = (event)=>{
        this.setState({email:event.target.value})
    }

    cadastrar = async() =>{

        const body ={
            "name":this.state.nome,
            "email":this.state.email
        }
        
    //     axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, 
    //     {headers: {Authorization: "ellen-lima-hopper"
    // }
    // })
    // .then(()=>{
    //     alert("Usuario cadastrado com sucesso")
    //     this.setState({nome:"", email:""})
    // })
    // .catch((error)=>{
    //     alert(" Esse email já foi cadastrado")
    //     this.setState({nome:"", email:""})
    // })

    //com try, catch e async

    try{
        await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, 
           {headers: {Authorization: "ellen-lima-hopper"
         }})
         alert("Usuario cadastrado com sucesso")
         
    }

    catch(error){
        alert(" Esse email já foi cadastrado")
    }




    }

    render(){
        return(

            <div>
                <h2>Tela cadastro</h2>
                <button onClick={this.props.troca}>Trocar de tela</button>
                
                <input placeholder="nome" value={this.state.valorNome} onChange={this.valorNome}></input>
                <input placeholder="email" value={this.state.valorEmail} onChange={this.valorEmail}></input>

                <button onClick={this.cadastrar}>Cadastrar Usuario</button>
                
                </div>

            
        )
    }
}

export default TelaCadastro;