// Função construtora
function Produtos(nomeP, preco, desconto = 0.10) {
  this.nome = nomeP
  this.preco = preco
  this.desconto = desconto

  this.precoFinal = function () {
    return this.preco * (1 - this.desconto)
  }
}

console.log('Produtos é uma:', typeof Produtos)
console.log('Promise é uma:', typeof Promise)
console.log('Object é uma:', typeof Object)

const p1 = new Produtos('caneta', 10)
console.log('A instância de um produto é um:', typeof p1)
console.log(p1.nome)

const p2 = new Produtos('Geladeira', 100)
console.log('A instância de um produto é um:', typeof p2)
console.log(p2.precoFinal())