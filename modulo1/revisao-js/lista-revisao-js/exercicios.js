// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let tamanhoArray = array.length
    return tamanhoArray

   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let invertido = array.reverse()

    return invertido
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenado = array.sort(function(a,b){
        return a-b

    })
    return ordenado
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []

    for(i = 0 ; i < array.length; i++ ){
        if (array[i] % 2 === 0){
            arrayPares.push(array[i])
        }
        
    }
  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let numerosElevados = []

    for(i = 0 ; i <  array.length; i++){
        if (array[i] % 2 === 0){
            numerosElevados.push(array[i]*array[i])
        }
    }
 return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let numeroMaior = null
    for(let i = 0 ; i < array.length ; i++){
        if (array[i] > numeroMaior ){
            numeroMaior = array[i]

        }
    }
  return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero : Math.max(num1, num2),
        maiorDivisivelPorMenor : Math.max(num1,num2) % Math.min(num1,num2) === 0,
        diferenca : Math.max(num1,num2) - Math.min(num1,num2)
        
            
    }
    return objeto 
 

}

    


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeiroPares = []
    for(let i = 0; primeiroPares.length < n; i++){
        if(i % 2 === 0){
            primeiroPares.push(i)
        }
    }
   return primeiroPares
}
retornaNPrimeirosPares(3)

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < ( ladoA + ladoB)) {
        if (ladoA == ladoB && ladoB == ladoC){
            return "Equilátero"
        }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            return "Isósceles"

        }else{
            return "Escaleno"
        }

    }
   return classificaTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let retornar = []
    let ordenado = retornaArrayOrdenado(array)
    retornar.push(ordenado[ordenado.length - 2])
    retornar.push(ordenado[1])
    
    return retornar 
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO" 

    return pessoa
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let retornarPessoas = []
    for(pessoa of pessoas){
      if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5){
        retornarPessoas.push(pessoa)
        
    }
   
}
return retornarPessoas 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []
    for(pessoa of pessoas){
      if(pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5){
        pessoasNaoAutorizadas.push(pessoa)
        
    }
   
}
return pessoasNaoAutorizadas

  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.map(function(elemento , indice){
        let totalContas = contas[indice].compras.reduce(function(valorInicial, valorAtual){
            return valorInicial + valorAtual
        },0)
        contas[indice].saldoTotal = contas[indice].saldoTotal - totalContas
        contas[indice].compras=[]

    })
    
     return contas   
    


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let ordemAlfabetica = consultas.sort(function(a,b){
        if(a.nome > b.nome){
            return 1
        }
        if (a.nome < b.nome) {
            return -1;
          }
       
            return 0;
        

    })
    return ordemAlfabetica

  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}