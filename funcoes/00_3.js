// Função construtora
function Produtos(nomeP, preco, desconto = 0.10) {
  this.nome = nomeP
  this.preco = preco
  this._desconto = desconto

  this.precoFinal = function () {
    return this.preco * (1 - this._desconto)
  }
}

Produtos.prototype.log = function () {
  console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produtos.prototype, 'desconto', {
  get: function () {
    return this._desconto
  },
  set: function (novoDesconto) {
    if (novoDesconto >= 0 && novoDesconto <= 1) {
      this._desconto = novoDesconto
    }
  }
})

Object.defineProperty(Produtos.prototype, 'descString', {
  get: function () {
    return `${this._desconto * 100}%`
  }
})

console.log('Produtos é uma:', typeof Produtos)
console.log('Promise é uma:', typeof Promise)
console.log('Object é uma:', typeof Object)

const p1 = new Produtos('caneta', 10)
console.log('A instância de um produto é um:', typeof p1)
console.log(p1.nome)
p1.log()

const p2 = new Produtos('Geladeira', 100)
console.log('A instância de um produto é um:', typeof p2)
console.log(p2.precoFinal())
p2.desconto = 1
console.log(p2.desconto)
console.log(p2.descString)
