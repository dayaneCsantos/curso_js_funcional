function textoComTamanhoEntre(min) {
  return max => {
    return erro => {
      return texto => {
        // Lazy Evaluation, atrasa o processamento para só quando for necessário
        const tamanho = (texto || '').trim().length

        if (tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome do produto inválido!')

const p1 = { nome: 'AAA', preco: 14.99, desc: 0.25 }
// textoComTamanhoEntre(4)(255)('Nome inválido')(p1.nome)
// forcarTamanhoPadrao('Nome inválido!')(p1.nome)
// forcarNomeProdutoValido(p1.nome)
forcarNomeProdutoValido(p1.nome)
