import React, { useEffect, useState } from "react";
import axios from "axios";
import home from "../components/img/home.png"

function TelaLista(props){

    const[mostrarMatch, setMostrarMatch] = useState([])

    useEffect(()=>{
        Matches()
    },[])

    function Matches(){
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ellen/matches")
        .then((response)=>{
            console.log(response.data.matches)
            setMostrarMatch(response.data.matches)
        })
        .catch((err)=>{
            console.log(err.response)
        })
        
        
    }
    

    return (

        
    <div className="corpo-da-lista"> 
         <div className="meio-da-lista">       
        <img className="botao-voltar" onClick={props.trocar} src={home}></img>
        <h2>Seus Matches</h2>
        </div> 
        {mostrarMatch.map((match,id)=>{
            return(
                <ul key={id}>
                    <li>
                        <div >
                        <img className="imagem-matches" src={match.photo}></img>
                        </div>
                        <p>
                        {match.name}
                        </p>

                    </li>
                </ul>
            )
        })}     

    </div>

    
    )
}

export default TelaLista;