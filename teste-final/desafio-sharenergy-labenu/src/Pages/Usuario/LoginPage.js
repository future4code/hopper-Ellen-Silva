import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Div,Input, Button,DivButton,P,Error} from "./LoginStyled"

const LoginPage = ()=>{

  const navigate = useNavigate()
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [checked, setChecked] = useState(false)

  const usuarioLogado = {
    login,
    senha
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (login === "desafiosharenergy" && senha === "sh@r3n3rgy") {
      if (checked === true) {
        localStorage.setItem("usuario", JSON.stringify(usuarioLogado))

      }

      navigate("/user")

    } else {
      setErro("Usuário ou senha incorreta")
    }


    console.log('Entrar', { login, senha })
  }

  const handleOnChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const guardarUsuario = localStorage.getItem("usuario")
    JSON.parse(guardarUsuario)

    if (guardarUsuario) {

      navigate("/user")
    }
  }, [])

  return (
    <Div>
      <P>Login</P>
      <Input type='text' value={login} onChange={(event) => setLogin(event.target.value)}></Input>
      <P>Senha</P>
      <Input type='password' value={senha} onChange={(event) => setSenha(event.target.value)}></Input>
      <DivButton><Button onClick={handleSubmit}>Entrar</Button></DivButton>
      <DivButton><Input type='checkbox' checked={checked} onChange={handleOnChange}></Input>Lembrar de mim</DivButton>
      <Error>{erro}</Error>
    </Div>
  )
}
export default LoginPage