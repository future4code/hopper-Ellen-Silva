import React from "react";
import { Button } from "../CadastrarStyled";

const VerUsuario = ({value,handleEditClick,handleDeleteClick})=>{
    return(
        <tr>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td>{value.phone}</td>
          <td>{value.cpf}</td>
          <td>
            <Button onClick={(event)=>handleEditClick(event,value)}>Editar</Button>
            <Button onClick={()=>handleDeleteClick(value.id)}>Deletar</Button>
          </td>
        
              
        </tr>

    ) 

}

export default VerUsuario;