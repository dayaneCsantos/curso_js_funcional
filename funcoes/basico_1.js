let a = 4
console.log(a)

// Function Declaration

function bomDia() {
  console.log('Bom dia!')
}

bomDia()

// Function expression

const boaTarde = function () {
  console.log('Boa tarde!')
}

let x = boaTarde() //undefined
console.log(x)

function somar(a, b) {
  return a + b
}

// O javascript possui flexibilidade nos parâmetros
// onde podemos utilizar uma função informando mais parâmetros
// que o esperado, e será desconsiderado os parâmetros a mais
// mais caso seja informado parâmetros a menos que o esperado
// irá retornar NaN
let resultado = somar(4, 4)
console.log(resultado)

resultado = somar(4, 5, 6, 7, 8)
console.log(resultado)

resultado = somar(4)
console.log(resultado)