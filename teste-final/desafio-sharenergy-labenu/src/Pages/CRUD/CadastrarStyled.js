import styled from "styled-components";

export const Div = styled.div`
width:100%;
max-width:800px;
margin:50px 100px;
padding:20px 150px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
justify-items:center;
gap:10px;
border-radius:5px;
background-color:#cbbeec;
`
export const Input = styled.input`
  max-width: 100%;
  padding: 8px 2px;
  background: #f9f9fa;
  color: #231054;
  margin:0.7rem 0.2rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`
export const Button = styled.button`
 
  padding: 11px 13px;
  color:white;
  font-weight: 600;
  text-transform: uppercase;
  background: #231054;
  margin: 0.9rem 0.2rem; 
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  align-items:center;
`
export const Table = styled.table`
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
 
}
td,th {
  border: 1px solid #a89bc9;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius:2px;
  
}
td {
  background-color:#a89bc9
}
th{
  background-color:#a89bc9
}

`
export const Cadastro = styled.div`
  display:flex;
  flex-direction:column;
  text-transform: uppercase;
  font-weight:UP;
  color: #231054;
  text-align: center;
  
`
export const Form = styled.form`
display:flex;
justify-content:center;
`