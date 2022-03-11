/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
 * 

//TENTATIVA 1   
const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*confirm("Seja bem vindo ao jogo BlackJack!"+"\n"+ "Quer iniciar uma rodada?")*/

/*const compraUsuario = comprarCarta()
const compraUsuario1 = comprarCarta()
const compraUsuario2 = comprarCarta()
const compraComputador = comprarCarta()
const compraComputador1= comprarCarta()
const cartaComputador = compraUsuario1.texto
const cartaUsuario = compraUsuario1.texto + compraUsuario2.texto
 
confirm(`Suas cartas são:${cartaUsuario} A carta revelada do computador é ${cartaComputador}.\n Deseja comprar mais uma carta?`)

const valorUsuario = cartaUsuario + compraUsuario.texto
const valorUsuario1 = compraUsuario.valor + compraUsuario1.valor
const valorComputador = cartaComputador + compraComputador.texto
const valorComputador1 = compraComputador.valor + compraComputador1.valor
 
 
confirm(` Usuario - carta:${valorUsuario} - Pontuação: ${valorUsuario1}.\n Usuario - carta:${valorComputador} - Pontuação: ${valorComputador1}.`)*/


//TENTATIVA 2
//começo do jogo

/*const pontuacaoFinal= 21

const compraUsuario = comprarCarta()
const compraUsuario1 = comprarCarta()
const compraUsuario2 = comprarCarta()

const compraComputador = comprarCarta()
const compraComputador1= comprarCarta()
const cartaComputador = compraComputador.texto

const cartaUsuario = compraUsuario.texto + compraUsuario1.texto

console.log(confirm("Seja bem vindo ao jogo BlackJack!"+"\n"+ "Quer iniciar uma rodada?"))

while(cartaUsuario < pontuacaoFinal){
 cartaUsuario+=compraUsuario2.texto
}

console.log(confirm(`Suas cartas são:${cartaUsuario} A carta revelada do computador é ${cartaComputador}.\n Deseja comprar mais uma carta?`))
 
const valorUsuario = compraUsuario.valor + compraUsuario1.valor
const valorUsuario1 = valorUsuario + compraUsuario1.valor

const valorComputador = compraComputador.valor
const valorComputador1 = valorComputador.valor + compraComputador1.valor

console.log(confirm(`carta Usuario:${cartaUsuario + compraUsuario2.texto} e valor:${valorUsuario + compraUsuario2.valor}
\n carta computador:${cartaComputador + compraComputador1.texto} e valor ${valorComputador+compraComputador1.valor}`))

if(valorUsuario1>valorComputador1){
   console.log(confirm(`Usuario ganhou!`))
   
   }else if(valorUsuario1<pontuacaoFinal){
    console.log(confirm("Computador ganhou!"))
   }else
   console.log(confirm("Empate"))*/

//TENTATIVA 3
// INICIAR JOGO
let confirma = true
if (!confirm("Seja bem vindo ao jogo BlackJack!" + "\n" + "Quer iniciar uma rodada?")){
  alert ("Fim de jogo!")
  confirma=false
}

//CARTAS FIXAS

let compraUsuarioFixo = comprarCarta()
let compraUsuarioFixo1 = comprarCarta()
let compraUsuario = compraUsuarioFixo.texto + compraUsuarioFixo1.texto

let compraComputadorFixo = comprarCarta()
let cartaComputador = compraComputadorFixo.texto

let comprarUsuarioValor = compraUsuarioFixo.valor + compraUsuarioFixo1.valor
let compraComputadorValor = compraComputadorFixo.valor

const continuarJogo = confirm(`Suas cartas são:${compraUsuario} A carta revelada do computador é ${cartaComputador}.\n Deseja comprar mais uma carta?`)

if (continuarJogo==false && confirma==true){
confirma = validarPontuacao()

}
// PUXAR CARTA
let cartaFinal = 21



while (confirma) {

   const compraMaisUmaUsuario = comprarCarta()
   const compraMaisUmaComputador = comprarCarta()

   compraUsuario += compraMaisUmaUsuario.texto
   cartaComputador += compraMaisUmaComputador.texto

   comprarUsuarioValor += compraMaisUmaUsuario.valor
   compraComputadorValor += compraMaisUmaComputador.valor

   confirma = validarPontuacao()

}
function validarPontuacao() {

   if (comprarUsuarioValor < cartaFinal) {

      alert(`Usuário carta- ${compraUsuario} -pontuação ${comprarUsuarioValor} \n Computador- ${cartaComputador} -pontuação ${compraComputadorValor} \n Usuario ganhou!`)
      return false

   }
   if (compraComputadorValor < cartaFinal) {

      alert(`Usuário carta- ${compraUsuario} -pontuação ${comprarUsuarioValor} \n Computador- ${cartaComputador} -pontuação ${compraComputadorValor} \n Computador ganhou!`)
      return false
   }
   if (compraComputadorValor === comprarUsuarioValor) {

      alert(`Usuário carta- ${compraUsuario} -pontuação ${comprarUsuarioValor} \n Computador- ${cartaComputador} -pontuação ${compraComputadorValor} \n Empate!`)
      return false
   }
   return true
}




