// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt(10)
  let largura = prompt (5)
  let resultado = altura*largura

  console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number (prompt("Qual ano estamos?"))
  let anoNacismento = Number (prompt("Que ano você nasceu?"))

  console.log(anoAtual-anoNacismento)



}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let altura2 = altura*altura
  let IMC = peso/altura2

  return IMC
 



  }

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual o seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt("Qual seu email?")
  let resultado = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log (resultado)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Qual sua primeira cor favorita?")
  let cor2 = prompt("Qual sua segunda cor favorita?")
  let cor3 = prompt("Qual sua terceira cor favorita?")

  console.log([cor1, cor2, cor3])




}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanho1 = string1.length
  let tamanho2 = string2.length

  return tamanho1 == tamanho2

  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui

    return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array[array.length -1]
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let auxiliar = array[0]

  array[0] = array[array.length - 1]
  array[array.length - 1] = auxiliar
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  let resultado = string1.toUpperCase() === string2.toUpperCase()
  return resultado

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}