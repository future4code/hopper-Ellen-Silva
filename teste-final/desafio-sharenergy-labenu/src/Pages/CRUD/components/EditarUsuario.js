import React from "react";
import { Button,Input } from '../CadastrarStyled';


const EditarUsuario = ({onEdit, handleEditChange, data, handleCancelClick})=>{
    return(
        <tr>
            <td>
            <Input 
            name="name" 
            required="required" 
            placeholder="Nome" 
            onChange={handleEditChange} 
            defaultValue={data.name}>

            </Input>
            </td>
            <td>
            <Input 
            name="email" 
            required="required" 
            placeholder="Email" 
            onChange={handleEditChange} 
            defaultValue={data.email}>

            </Input>
            </td>
            <td>
            <Input 
            name="phone" 
            required="required" 
            placeholder="Telefone" 
            onChange={handleEditChange} 
            defaultValue={data.phone}>

            </Input>
            </td>
            <td>
            <Input 
            name="cpf" 
            required="required" 
            placeholder="CPF" 
            onChange={handleEditChange} 
            defaultValue={data.cpf}>
                
            </Input>
            </td>
            <td>
                <Input name="id" type="hidden" value={data.id}></Input>
                <Button>Salvar</Button>
                <Button onClick={handleCancelClick}>Cancelar</Button>
                </td>

        </tr>
    )

}

export default EditarUsuario;