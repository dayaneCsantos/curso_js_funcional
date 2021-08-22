function ordenar(array) {
  return [...array].sort((a, b) => a - b)
}

const num = [4, 7, 2, 1, 8] // Object.freeze([4, 7, 2, 1, 8]) congela o objeto para não permitir nenhuma alteração
const numsOrdenados = ordenar(num)

console.log(num, numsOrdenados)
