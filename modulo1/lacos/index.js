//Exercícios de interpretação de código

//QUESTÃO 1
/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)*/
//RESPOSTA: VAI RETORNAR 4 VEZES O i

//QUESTÃO 2
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}*/
//RESPOSTA: a) vai retornar os numeros maiores que 18
//          b)para acessar cada item tem q usar uma .length

//QUESTÃO 3
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/
//RESPOSTA: vai aparecer 4 linhas e cada linha um * a mais

//Exercícios de escrita de código

//QUESTÃO 1

/*let animais = Number (prompt("Quantos bichos de estimação você tem?"))
let bichinhos=[]

if(animais === 0){
console.log("Que pena! Você pode adotar um pet!")
} else {
  while(bichinhos.length < animais ){
    
    let nomeDoBicho = prompt("Digite o nome dos seus bichinhos um por um")
    bichinhos.push(nomeDoBicho)

  }
  console.log(bichinhos)
}*/

//QUESTÃO 2 
//a) Escreva um programa que **imprime** cada um dos valores do array original.
/*let arrayOriginal = [10,20,9,35,40,50]

for (let i = 0; i < arrayOriginal.length; i++) {
  
  console.log(arrayOriginal[i])
}*/

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

/*let arrayOriginal = [10,20,9,35,40,50]
let divisao = 10

for (let i = 0; i < arrayOriginal.length; i++) {

 
  console.log(arrayOriginal[i]/divisao)
}*/

//c) Escreva um programa que **crie** um novo array contendo, somente, 
//os números pares do array original e **imprima** esse novo array 
let arrayOriginal = [10,20,9,35,40,50]
let arrayPar = []

for (let i = 0; i < arrayOriginal.length; i++) {
 if(arrayOriginal[i] % 2 === 0){
arrayPar.push(arrayOriginal[i])

} 
console.log(arrayPar) 
}

/*
       d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma:
     "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original*/  
  