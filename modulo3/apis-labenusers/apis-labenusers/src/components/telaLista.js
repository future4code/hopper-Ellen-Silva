import React from "react";
import axios from "axios";

class TelaLista extends React.Component{

    state = {
        usuarios:[]
    }

    componentDidMount(){
        this.PegarUsuarios()
    }

    PegarUsuarios = async() =>{
//         axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {headers:{Authorization: "ellen-lima-hopper"
//     }
// })
// .then((response)=>{
//     console.log(response.data)
//     this.setState({usuarios:response.data})


// })
// .catch((error)=>{
//     console.log(error.data)

// })

// feito com try, catch e async
try{
    const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {headers:{Authorization: "ellen-lima-hopper"
        }
     })
     this.setState({usuarios:response.data})
}

catch(error){
    console.log(error.data)
}


    }

    deletarCadastro = async(id) =>{
//         axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {headers:{Authorization: "ellen-lima-hopper"
//     }
// }) 
// .then((response)=>{
//     alert("Usuario apagado com sucesso")
//     this.PegarUsuarios()

// })
// .catch((error)=>{
//     alert("Tente novamente")

// })

//feito com try, catch e async

try{

    await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {headers:{Authorization: "ellen-lima-hopper"
   }
 }) 
 alert("Usuario apagado com sucesso")
   this.PegarUsuarios()
}

catch(error){
    alert("Tente novamente")
}
    
}

    render(){

        return(
            <div>
                <h2>Tela lista</h2>
                <button onClick={this.props.troca}>Trocar de tela</button>

                {
                    this.state.usuarios.map((usuario)=>{
                        return(
                            <ul>
                                <li>
                                    {usuario.name}
                                </li>
                                <button onClick={()=>this.deletarCadastro(usuario.id)}>Deletar</button>
                            </ul>
                        )
                    })
                }
            </div>
            
        )
    }
}

export default TelaLista;