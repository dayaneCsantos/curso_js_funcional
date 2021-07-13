const carrinho = [
  { nome: 'Caneta', qtde: 1, preco: 1, fragil: true },
  { nome: 'Borracha', qtde: 1, preco: 1, fragil: true },
  { nome: 'Caderno', qtde: 1, preco: 1, fragil: true },
  { nome: 'Bolsa', qtde: 1, preco: 1, fragil: true },
]

// Aqui iremos utilizar do filter, map e reduce

// 1. selecionar apenas os elementos que tem fragil = true

const getFragil = item => item.fragil === true
const getNome = item => item.nome

const elementosFrageis = carrinho
  .filter(getFragil)
  .map(getNome)

console.log('Elementos frágeis:', elementosFrageis)

// 2. Gerar o total de cada elemento, qtde: 4, preco: 27.10

const getTotalPreco = item => item.qtde * item.preco

const total = carrinho
  .map(getTotalPreco)

console.log('Preço total:', total)

// 3. Gerar a média de todos os totais de cada um dos elementos

const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco

const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1
  const novoTotal = acc.total + el
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde
  }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
  .filter(isFragil)
  .map(getTotal)
  .meuReduce(getMedia, mediaInicial)

console.log('A média é:', media)