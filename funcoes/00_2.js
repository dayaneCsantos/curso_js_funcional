class Produto {
  constructor(nomeP, precoP, descontoP = 0.10) {
    this.nome = nomeP
    this.preco = precoP
    this.desconto = descontoP
  }

  get nome() {
    return `Produto: ${this._nome}`
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase()
  }

  get preco() {
    return this._preco
  }
  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco
    }
  }

  precoFinal() {
    return this.preco * (1 - this.desconto)
  }
}

const p1 = new Produto('arroz', 100)
// p1.nome = 'caneta'
p1.preco = 20
console.log(`O preço do ${p1.nome} é ${p1.preco} reais com desconto volta para ${p1.precoFinal()} reais`)
