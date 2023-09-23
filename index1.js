  
  function calcularPrecoComDesconto(valorProduto, qtdProduto, callback) {
    return callback(Number(valorProduto) * Number(qtdProduto))
  }

  function desconto(valorTotal, perDesconto) {
    return (Number(valorTotal) * (1 - (Number(perDesconto)/100)))
}
  
  const valorProduto = 500
  const qtdProduto = 5
  const descProduto = 10

console.log(calcularPrecoComDesconto(valorProduto, qtdProduto, (res) => desconto(res, descProduto)))

