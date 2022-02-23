//Exercícios de interpretação de código
// Questão 1
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])                     //a. //"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) //"Virginia Cavendish"
console.log(filme.transmissoesHoje[2])             //canal: "Globo", horario: "14h"

//Questão 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a. cachorro: Juca, 3, SRD
//   gato: Juba, 3, SRD
//   tartaruga: Jubo, 3 , SRD

//b. ele repete os dados da const anterior

//Questão 3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

//a. false e undefined
//o false foi por que foi declarado que a pessoa nao era backender e na altura ele nao fez nenhuma atribuição

//Exercícios de escrita de código

//Questão 1 
/*const pessoa = {
    nome: "Ellen", 
    apelidos: ["Ellenzita", "Ellenzinha", "Ellinha"]
 }
 //a.
 console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos}`)

 //b.
 const pessoa1 = {...pessoa, apelidos:["Cruvinovisky", "Nenem","Cruvina furacão"]  
 }
 console.log(pessoa1)

 //Questão 2

 const pessoa2= {
     nome: "Ellen",
     Idade: 25,
     profissao: "Farmaceutica"
 }
 console.log([pessoa2.nome, pessoa2.nome.length, pessoa2.Idade, pessoa2.profissao, pessoa2.profissao.length])*/

 //Questão 3
  /* const carrinho = []

   const frutasMercado=[

{nome:"banana",disponibilidade: true },
{nome:"maça", disponibilidade: true},
{nome:"pera", disponibilidade:true}
]
function frutas(frutasSacolao){

 carrinho.push(frutasSacolao)  
   
}

 frutas(frutasMercado)
 console.log(carrinho)*/

 //Desafios
 /*let Perguntas={
    
  nome:prompt("Qual seu nome?"),
  idade: prompt("Qual sua idade?"),
  profissao:prompt("Qual sua profissão?")
 }
 function Perguntas1(nome, idade, profissao){
    
 return Perguntas
  } 

console.log(Perguntas)*/
 
const filme={
     nome: "Mulan",
     anoDeLancamento:1998
 }
 const filme1={
     nome:"Tarzan",
     anoLancamento:1999
 }
function filmes(filmeLegais){
console.log("O primeiro filme foi lançado antes do segundo?",filmeLegais.anoDeLancamento>filmeLegais.anoLancamento)
console.log("O primeiro filme foi lançado no mesmo ano que o segundo?",filmeLegais.anoDeLancamento==filmeLegais.anoLancamento)   
}
filmes(filme,filme1)


 

 

