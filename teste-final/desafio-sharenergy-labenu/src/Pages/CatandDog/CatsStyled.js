import styled from "styled-components";

export const Div = styled.div`
 margin: 8rem auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #cbbeec;
  border-radius:5px;
`
export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #231054;
  margin-bottom: 0.9rem;
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
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  margin:20px 10px 0px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`

export const Img= styled.img`
 width:350px;
 height:350px;
 margin:0 30px;
 
`
export const Cats = styled.div`
  display:flex;
  flex-direction:column;
  text-transform: uppercase;
  font-weight:UP;
  color: #231054;
  text-align: center;
  
`