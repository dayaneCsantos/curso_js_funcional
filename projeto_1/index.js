const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
  '.', '!', '?', '-', '_', ',', '"', '♪',
  '<i>', '</i>', '\r', '[', ']',
  '(', ')'
]

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminandosCom('.srt'))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarPorTexto('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarPorTexto(' '))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.agruparElementos)
  .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
  .then(console.log)
