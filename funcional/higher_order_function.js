// Higher order function são funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as

function executar(fn, ...params) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...params)}!`
  }
}

function somar(a, b) {
  return a + b
}

function multiplicar(a, b) {
  return a * b
}

const result1 = executar(somar, 1, 4)('O resultado da soma é')
const result2 = executar(multiplicar, 5, 5)('O resultado da multiplicação é')

console.log(result1)
console.log(result2)
