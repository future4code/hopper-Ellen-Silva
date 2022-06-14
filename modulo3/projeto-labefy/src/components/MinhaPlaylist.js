import axios from "axios";
import React from "react";
import VerPlaylist from "./VerPlaylist";


class MinhaPlaylist extends React.Component{

    state ={
        playlists: [],
        Detalhes:"Minha playlist"
    }

    VerDetalhes = ()=>{
        this.setState({Detalhes:this.state.Detalhes === "Minha Playlist"  ? "detalhes": "Minha Playlist" })
      }

    componentDidMount(){
        this.PegarPlaylist()
    }

    PegarPlaylist = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{headers:{Authorization:"ellen-lima-hopper"}
    
    }).then((response) =>{
        this.setState({playlists:response.data.result.list})
        
        
    }).catch((error)=>{
        console.log(error.response)
    })
    }

    deletarPlaylist = (id)=>{
        axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{headers:{Authorization:"ellen-lima-hopper"}
    }).then(()=>{
        alert("Playlist apagada com sucesso!")
        this.PegarPlaylist()

    }).catch(()=>{
        alert("Erro ao deletar Playlist")

    })
        
    }

         
    render(){
        return(
            
            <div>
            <button onClick={this.props.troca}>Home</button>
                   
            <h2>Tela lista de playlist</h2>

            {
            this.state.playlists.map((playlist)=>{
                return (
                    
                    <ul>
                        <li>{playlist.name}</li>
                        <button onClick={()=> this.deletarPlaylist(playlist.id)}>X</button>
                        <button onClick={this.VerDetalhes}>Ver detalhes</button>
                    </ul>
                )

            })
            }
              
               
            </div>
        )
    }
}
    


export default MinhaPlaylist;