// functors são objetos que implementam a função MAP
// que também é um "wrapper" de um valor

// Array é um exemplo de functors

const nums = [1, 4, 5, 3, 8]
const novosNums = nums
  .map(el => el + 10)
  .map(el => el * 2)

console.log(nums, novosNums)

function tipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined
    },
    map(fn) {
      if (this.invalido()) {
        return tipoSeguro(null)
      } else {
        const novoValor = fn(this.valor)
        return tipoSeguro(novoValor)
      }
    },
    flatMap(fn) {
      return this.map(fn).valor
    }
  }
}

const original = 'Esse é um texto'
const alterado = tipoSeguro(original)
  .map(t => t.toUpperCase())
  .map(t => `${t}!!!`)
  .flatMap(t => t.split('').join(' '))

console.log(original, alterado)
