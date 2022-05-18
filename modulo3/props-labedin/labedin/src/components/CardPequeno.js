import React from "react";
import styled from 'styled-components';

const LittleContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

`
const LittleImagem = styled.img`

    width: 40px;
    margin-right: 10px;
    border-radius: 50%;

` 
 
const LittleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start; 
`

function CardPequeno(props){
    return(

        <LittleContainer>
        <LittleImagem img src={ props.imagem } />
        <LittleDiv>
            <h4>{ props.nome }</h4>
            <p>{ props.descricao }</p>
        </LittleDiv>
    </LittleContainer>
)
}

export default CardPequeno;
    