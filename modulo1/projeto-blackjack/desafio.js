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

// INICIAR JOGO
let confirma = true
if (!confirm("Seja bem vindo ao jogo BlackJack!" + "\n" + "Quer iniciar uma rodada?")) {
   alert("Fim de jogo!")
   confirma = false
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

if (continuarJogo == false && confirma == true) {
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




