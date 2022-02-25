//Exercícios de interpretação de código
//Questão 1
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
/*a. ele esta pedindo para se o numero tiver um resto igual a 0 vai dar o resultado "passou no teste" 
caso contrario vai dar a mensagem"Não passou no teste"*/
/*b. numeros pares*/
/*c. para numeros impares*/

//Questão 2
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*a.O codigo serve para substituir o if */
/*b.O preço da fruta maça é R$2.25 */
/*c. se retirar o break ,caso escolha pêra, vai da o valor do default */

//Questão 3
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

/*a. o primeiro codigo esta pedindo um numero qualquer para o usuario*/
/*b. se ele digitar o numero 10 vai aparecer a mensagem "Esse numero passou no teste"
se ele digitar -10 não vai dar mensagem nenhuma*/
/*c. ele nao dara a mensagem "essa mensagem é secreta" pois nao foi feito um else para ela*/


//Exercícios de escrita de código

//Questão 1

/*let usuario = Number (prompt("Qual sua idade?"))

if(usuario>=18){
    console.log("Pode dirigir")
}
else{
    console.log("Sinto muito, você não pode dirigir")
}*/


 //Questão 2
 
  /*let aluno = prompt("Qual o turno que você estuda? Digite M para manha, V para tarde e N para noite" )

  if(aluno==="M"){
      console.log("Bom dia!")
  }
  else if(aluno==="V"){
      console.log("Boa tarde!")
  }
  else if(aluno==="N")
      console.log("Boa noite!")*/

  //Questão 3
  
  /*let aluno = prompt("Qual o turno que você estuda? Digite M para manha, V para tarde e N para noite" )
   
  switch(aluno){
      case "M":
       console.log("Bom dia!")
       break
      case "V":
      console.log("Boa tarde!")
       break;

      case "N":
      console.log("Boa noite!")
      break;
  }*/
  
//Questão

/*você vai ao cinema com um amigo ou amiga, porém ele/ela 
só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
 imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("*/

 /*let filme= prompt("Qual gênero você vai assistir?")
 let valor = prompt("Qual o valor do ingresso")

 if(valor<=15 && filme==="fantasia") {
     console.log("Bom filme!")
 }
 else{
console.log("Escolha outro filme")
 }*/

 //Desafios

//Questão 1

/*let filme= prompt("Qual gênero você vai assistir?")
 let valor = prompt("Qual o valor do ingresso")
 let lanche = prompt("Qual lanchinho você vai querer?")

 if(valor<=15 && filme==="fantasia") {
     console.log(`Bom filme e aproveite o seu ${lanche}`)
 }
 else{
console.log("Escolha outro filme")
 }*/

 //Questão 2

 let nome=prompt("Qual seu nome?")
 let jogo=prompt("Qual seu tipo de jogo? Digite IN para internacional e DO para doméstico")
 let etapaDoJogo=prompt("Qual a etapa do jogo? Digite SF para semi-final, DT para decisão de terceiro lugar e FI para final")
 let categoria=Number (prompt("Qual a categoria? Digite 1, 2, 3 ou 4"))
 let quantidadeIngressos=Number (prompt("Quantidade de ingressos?"))
 let valorDoIngresso    

 
 
 switch(etapaDoJogo){
     case "SF":
        etapaDoJogo="Semi-Final"
         
         switch(categoria){
         case 1:
             valorDoIngresso=1320
             break
         case 2:
             valorDoIngresso=880
             break
         case 3:
             valorDoIngresso=550
             break
         case 4:
             valorDoIngresso=220
            }
            break
          
     case "DT":
        etapaDoJogo="Decisão de 3º lugar"
         
         switch(categoria){
            case 1:
                valorDoIngresso=660
                break
            case 2:
                valorDoIngresso=440
                break
            case 3:
                valorDoIngresso=330
                break
            case 4:
                valorDoIngresso=170
                
         }
         break
         
     case "FI":
         etapaDoJogo="Final"
                  
         switch(categoria){
            case 1:
                valorDoIngresso=198
                break
            case 2:
                valorDoIngresso=132
                break
            case 3:
                valorDoIngresso=880                
                break
            case 4:
                valorDoIngresso=330   
                   
         }
         break
        }
        switch(jogo){
            case "DO":
                console.log(`
                    ---Dados da compra--- 
                Nome do cliente:  ${nome} 
                Tipo do jogo:  Doméstico 
                Etapa do jogo:  ${etapaDoJogo}
                Categoria:  ${categoria}
                Quantidade de Ingressos:  ${quantidadeIngressos}
                     ---Valores--- 
                Valor do ingresso:  R$ ${valorDoIngresso}
                Valor total:  R$ ${valorDoIngresso*quantidadeIngressos}`)
                break
                
            case "IN":
                console.log(`
                    ---Dados da compra--- 
                Nome do cliente:  ${nome} 
                Tipo do jogo:  Internacional 
                Etapa do jogo:  ${etapaDoJogo}
                Categoria:  ${categoria}
                Quantidade de Ingressos:  ${quantidadeIngressos}
                     ---Valores--- 
                Valor do ingresso:  U$ ${valorDoIngresso*4.10}
                Valor total:  U$ ${valorDoIngresso*quantidadeIngressos*4.10}`)
                break

        }



 
 
 



 


