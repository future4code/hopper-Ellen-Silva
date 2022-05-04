import React from 'react';




class Etapa1 extends React.Component{
    render() {
        return (
          <div className="Etapa1">
    
              <h2>ETAPA 1 - Dados Gerais</h2>
              <h3>1-Qual seu nome?</h3>
              <input></input>
              <h3>2-Qual sua idade?</h3>
              <input></input>
              <h3>3-Qual seu email?</h3>
              <input></input>
              <h3>4-Qual seu grau de escolaridade?</h3>
              <select >
                  <option value="vazio"></option>
                  <option value="Ensino Medio incompleto">Ensino Medio incompleto</option>,
                  <option value="Ensino Medio completo">Ensino Medio completo</option>,
                  <option value="Ensino superior incompleto">Ensino superior incompleto</option>,
                  <option value="Ensino superior completo">Ensino superior completo</option>,
              </select>
              

              


            
                
          </div>
        );
      }
    } 


  export default Etapa1;