const nums = [4, 8, 9, 2, 1, 3, 0]

// #3 - Recursividade

function somarArray(array, total = 0) {
  if (array.length === 0) {
    return total
  }
  return somarArray(array.slice(1), total + array[0])
}

const total = somarArray(nums)
console.log(total)

// // #2 - Reduce, Map, Filter - Não altera o array original, retorna um novo array
// // - Forma declarativa (abstraindo o passo a passo, dizendo o que é que tem que ser feito)

// const somar = (a, b) => a + b
// const total = nums.reduce(somar)
// console.log(total)

//   // #1 - Dados mutáveis - Forma imperativa(dizendo todo o passo a passo, dizendo como precisa ser feito)
// let total = 0

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i]
// }

// console.log(total)
