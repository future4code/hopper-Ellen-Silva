//Exercícios de interpretação de código

//QUESTÃO 1

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  //vai retornar o apelido e o nome de cada objeto*/

  //QUESTÃO 2

  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
  // vai retornar somente os nomes*/

  //QUESTÃO 3
  
  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/
  // vai retornar os apelidos que não forem Chijo

  //Exercícios de escrita de código

  //QUESTÃO 1
//a) Crie um novo array que contenha apenas o nome dos doguinhos
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomesPets = pets.map((nome) =>{
  return nome.nome
    
 })
 console.log(nomesPets)

 //b) Crie um novo array apenas com os cachorros salsicha

 const salsicha = pets.filter((raca)=>{
     return raca.raca === "Salsicha"
 })
 console.log(salsicha)

 //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
 //A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

 const poodle = pets.filter((racaPoddle)=>{
     return racaPoddle.raca === "Poodle"
 })

.map((mensagem)=>{
     return `Você ganhou um cupom de desconto de 10% para tosar o/a $! ${mensagem.nome}`

 })
console.log(poodle)

//QUESTÃO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item

 const nomes = produtos.map((nome)=>{

    return nome.nome

 })
console.log(nomes)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
//aplicando 5% de desconto em todos eles

const descontos = produtos.map((desconto)=>{
 const produto = (desconto.preco * 5) / 100
 const novoValor = desconto.preco - produto

 const valores = {
     nome: desconto.nome,
     preco: novoValor

     
 }
return valores
 
})
console.log(descontos)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const bebidas = produtos.filter((beber)=>{

    return beber.categoria === "Bebidas"

})

console.log(bebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê

const ypes = produtos.filter((ype)=>{

    return ype.nome.includes("Ypê")
    
})

console.log(ypes)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const comprar = produtos
.filter((produtosYpe)=>{

    return produtosYpe.nome.includes("Ypê")
})
.map((textoProdutos)=>{

    return(`Compre ${textoProdutos.nome} por ${textoProdutos.preco}`)
})

console.log(comprar)


