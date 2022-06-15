import React,{useEffect, useState} from "react"
import axios from "axios"
import matches from "../components/img/matches.png"


function TelaInicial(props){
    const[pretendentes, setpretendentes] = useState({})
    const[match,setMatch] = useState(null)


    useEffect(()=>{
        MudarPretendentes()
       },[])
     
      function MudarPretendentes(){
       axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ellen/person")
       .then((response)=>{
         console.log(response.data)
         setpretendentes(response.data.profile)
     
       }).catch((err)=>{
         console.log(err)
     
       
        })
      }
     
      function escolherPretendentes(id){
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ellen/choose-person", {
          id:id,
          choice:true
        }).then((response)=>{
          setMatch(response.data.profile)
     
        })
      }
     
      function darMatch(id){
        MudarPretendentes()
        escolherPretendentes(id)

              
      }

      function limparDados(){
          axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ellen/clear")
        .then((response)=>{
            setpretendentes(response.data.profile)
            console.log(response.data.profile)
      
        }).catch((error)=>{
            console.log(error.response)
        })
      }
      
      return (

        <div className="tela-inicial">

          <div className="header">

            <button className="botao-limpar" onClick={() => limparDados()}><h2>AstroMatch</h2></button>
            <img className="botao-de-lista" onClick={props.trocar} src={matches}></img>
            
          </div>  

            
          <div className="meio">

            <img className="imagem-pretendentes" src={pretendentes.photo}></img><br />
            {pretendentes.name},
            {pretendentes.age} <br />
            {pretendentes.bio} <br />
          </div>
          <div className="botoes">
            <button className="botao-de-rejeicao" onClick={() => MudarPretendentes()}>X</button>
            <button className ="botao-de-matches"onClick={() => darMatch(pretendentes.id)}>♥</button>
          </div>
        </div>
    )

     
}

export default TelaInicial;