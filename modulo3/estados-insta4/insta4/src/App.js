import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {


  listaComponentes = [
    <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/147'}
        />

        <Post
          nomeUsuario={'Ana'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/145'}
        />

        <Post
          nomeUsuario={'DeBemComaVida'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/148'}
        />
      </MainContainer>



  ]
  render() {
    
    return (
      <MainContainer>

        <input placeholder='nome' value=''/>
        <input placeholder='nome' value=''/>
        <input placeholder='nome' value=''/>
        <button>Confirmar</button>
        {this.listaComponentes}
        
      </MainContainer>


    );
  }
}

export default App;
