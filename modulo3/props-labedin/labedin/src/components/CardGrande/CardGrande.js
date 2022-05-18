import React from 'react';

import styled from 'styled-components';

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`
const BigImagem = styled.img`

    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

` 
const BigH4 = styled.h4`
 margin-bottom: 15px;
`
const BigDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start; 
`


function CardGrande(props) {
    return (
        <BigContainer>
            <BigImagem img src={ props.imagem } />
            <BigDiv>
                <BigH4>{ props.nome }</BigH4>
                <p>{ props.descricao }</p>
            </BigDiv>
        </BigContainer>
    )
}

export default CardGrande;