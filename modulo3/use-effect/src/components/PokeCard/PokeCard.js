import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard=(props)=> {
  
    // valor do estado que guarda infos e foto do pokemon
    const[pokemon,setPokemon] = useState({})

const pegaPokemon = pokeName => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => {
            // guarda as infos do pokemon no estado
            setPokemon({ pokemon: response.data });
          })
          .catch(err => {
            console.log(err);
          });

        
  
};

 // método que roda após a montagem do componente
useEffect(() => {
 pegaPokemon(props.pokemon);
},[])
            
// método que roda após a atualização do componente.
// Um dos casos de atualização do componente é a
// mudança da props que está sendo passado pra ele
useEffect((prevProps)=>{
// aqui, é feita uma verificação da props anterior com a props atual.
// Caso a props anterior seja diferente da props atual,
// a função pegaPokemon é chamada.
  if (prevProps.pokemon !== props.pokemon) {
 pegaPokemon(props.pokemon);
 }
},[])
              
// função que bate na poke API com um nome específico de pokemon
// Isso permite que consigamos pegar as infos dos pokemons.
// Nos métodos de ciclo de vida, ela é chamada passando como
// parâmetro o nome de pokemon que está chegando como props.
  

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
};


export default PokeCard;