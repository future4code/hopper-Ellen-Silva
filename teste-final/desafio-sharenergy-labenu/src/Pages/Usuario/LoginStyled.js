import styled from "styled-components";

export const Div = styled.div`
  margin: 8rem auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(0deg, rgba(188,216,227,1) 0%, rgba(118,45,253,0.5270483193277311) 93%);
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
  max-width: 100%;
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  
`
export const DivButton = styled.div`
text-align:center;
`
export const P = styled.p`
  color:#231054;
  font-weight: 600;
  text-transform: uppercase;
 
`
export const Error = styled.p`
color:red;
font-weight: 600;
text-transform: uppercase;
`
