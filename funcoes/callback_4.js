const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Borracha', qtde: 2, preco: 0.50 },
  { nome: 'Caderno', qtde: 1, preco: 12.99 },
  { nome: 'Bolsa', qtde: 2, preco: 100 },
]

// const qtdeMaiorQueZero = item => item.qtde > 9

// const itensValido = carrinho.filter(qtdeMaiorQueZero)

// console.log(itensValido)

// Usando filter com map

const getNome = item => item.nome
const qtdeMaiorQueUm = item => item.qtde >= 10

const nomeItensValidos = carrinho
  .filter(qtdeMaiorQueUm)
  .map(getNome)

console.log(nomeItensValidos)

// Filter por baixo dos panos

Array.prototype.meuFilter = function (fn) {
  const novoArray = []

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}

const nomeItens = carrinho
  .meuFilter(qtdeMaiorQueUm)
  .map(getNome)

console.log(nomeItens)