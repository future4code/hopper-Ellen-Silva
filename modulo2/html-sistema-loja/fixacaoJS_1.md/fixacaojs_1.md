function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let vendas = (qtdeCarrosVendidos*100) + (0.05*valorTotalVendas)
 let salario = vendas + 2000
 return salario

}