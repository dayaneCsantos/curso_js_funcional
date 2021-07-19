const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Borracha', qtde: 2, preco: 0.50 },
  { nome: 'Caderno', qtde: 1, preco: 12.99 },
  { nome: 'Bolsa', qtde: 2, preco: 100 },
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
  console.log(acc, el)
  return acc + el
}

const totais = carrinho.map(getTotal)

// const totalGeral = carrinho
//   .map(getTotal)
//   .reduce(somar)

console.log(totais)
const totalGeral = totais.reduce(somar, 0)

console.log(totalGeral)

// Implementação do reduce

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i]
      continue
    }

    acc = fn(acc, this[i], i, this)
  }
  return acc
}
