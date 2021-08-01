const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['ana', 'Fernanda', 'Katia']
const primeiroNome = texto => texto[0]
const letras = nomes.map(primeiroNome)
console.log(nomes, letras)

// criar duas funções para mapear e depois chamar o map
// Gera um array só com os nomes dos produtos
// gera um array com o valor total de cada produto

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Borracha', qtde: 2, preco: 0.50 },
  { nome: 'Caderno', qtde: 1, preco: 12.99 },
  { nome: 'Bolsa', qtde: 2, preco: 100 },
]

// const getNome = item => item.nome
// const verificarDescricao = carrinho.map(getNome)
// console.log(verificarDescricao)

// const getPreco = item => item.qtde * item.preco
// const verificarPreco = carrinho.map(getPreco)
// console.log(verificarPreco)

// Exemplo do que acontece por baixo dos panos ao utilizar .map
Array.prototype.meuMap = function (fn) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    novoArray.push(fn(this[i], i, this))
  }
  return novoArray
}

const getNome = item => item.nome
const verificarDescricao = carrinho.meuMap(getNome)
console.log(verificarDescricao)

const getPreco = item => item.qtde * item.preco
const verificarPreco = carrinho.meuMap(getPreco)
console.log(verificarPreco)
