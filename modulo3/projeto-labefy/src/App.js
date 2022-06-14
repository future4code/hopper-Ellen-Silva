
import './App.css';
import React from 'react';
import MinhaPlaylist from './components/MinhaPlaylist';
import Playlist from './components/Playlist';
import VerPlaylist from './components/VerPlaylist';

class App extends React.Component{

  state = {
    TelaInicial: "playlist",
    
  }

  TrocardeTela = ()=>{
    this.setState({ TelaInicial:this.state.TelaInicial === "playlist" ? "Minha Playlist" : "playlist"} )
  }

  


  render(){
    return(
      <div className='PaginaInicial'>

        {this.state.TelaInicial === "playlist"? <Playlist troca={this.TrocardeTela}/> : <MinhaPlaylist troca={this.TrocardeTela}/> } 
        
        
      </div>
    )

  }
    
}

export default App;
