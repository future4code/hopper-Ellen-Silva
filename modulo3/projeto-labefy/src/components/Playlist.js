import React from "react";
import axios from "axios";


class Playlist extends React.Component{

              
state= {
  nomePlaylist:"",
  
}

CriarMinhaPlaylist=(event)=>{
    this.setState({nomePlaylist:event.target.value})
}

CriarMusica=()=>{
    const body={
        "name": this.state.nomePlaylist
    }


    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{headers:{Authorization:"ellen-lima-hopper"}

}).then(()=>{
    alert("cadastrado com sucesso!")

}).catch(()=>{
    alert("Essa playlist ja existe")
})


}


render(){
  return(
      <div>

          <div>
          <button onClick={this.props.troca}>Minhas Playlists</button>
          </div>
          <h2>Tela Criar Playlist</h2>
          
          <input placeholder='Nome da playlist' value={this.state.nomePlaylist} onChange={this.CriarMinhaPlaylist}></input>
          <button onClick={this.CriarMusica}>Criar</button>
          
      </div>
   
  
                    
 )
                           
    }

}


export default Playlist;