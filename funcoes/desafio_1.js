// somar(3)(4)(5)

function somar(valorA) {
  return function (ValorB) {
    return function (ValorC) {
      return valorA + ValorB + ValorC
    }
  }
}

const resultado1 = somar(3)
console.log('RESULTADO 1:', resultado1(4)(5))

const resultado2 = somar(3)(4)(5)

console.log('RESULTADO 2:', resultado2)


// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(x) {
  return function (y) {
    return function (fn) {
      return (fn(x, y))
    }
  }
}

function substrair(valorA, ValorB) {
  return valorA - ValorB
}

function multiplicar(valorA, ValorB) {
  return valorA * ValorB
}

const resultado3 = calcular(10)(5)(substrair)
const resultado4 = calcular(10)(5)(multiplicar)
console.log(resultado3)
console.log(resultado4)