import React from "react";
import axios from "axios";

class IntegracaoAPI extends React.Component{

    state = {
        pegarDados:[]
    }

    componentDidMount(){this.PegarInformacoes()}

    PegarInformacoes=()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{headers:{Authorization:"ellen-lima-hopper"}
    })
    .then((response)=>{
        
        console.log("Sucesso!",response.data.result.list)
        this.setState({pegarDados:response.result.list})
    })
    .catch((error)=>{
        console.log("Erro",error.response.data)
    })
    }

    render(){

    const listas = this.state.pegarDados.map((Nomes)=>{

        return <h3>{Nomes.name}</h3>
    })
     return(
         <div>
             {listas}
         </div>
     )

    }
}

export default IntegracaoAPI;