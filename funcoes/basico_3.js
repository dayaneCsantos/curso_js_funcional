// arrow function

const felizNatal = () => console.log('Feliz Natal!!!!')
felizNatal()

const saudacao = (nome) => `Fala ${nome}, blz?!?`
//"fala " + nome + ",blz!?!"
console.log(saudacao('Fernanda'))

// Caso queira returnar um valor de uma função arrow que possui corpo
// precisamos informar o return, caso a função não tenha corpo(par de chaves), tenha apenas a expressão
// não precisa informar o return, a expressão será automaticamente retornada (nem podemos usar o return quando for uma expressão, pois vai contra as regras da linguagem)

const somar = (...numeros) => { // (...variavel) o parametro passa a ser variavel,
  // vai pegar todos os parametros e joga dentro de um array
  console.log(Array.isArray(numeros)) // Verificar se o parametro é um array
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
}
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4))
console.log(somar(1, 2, 3, 4, 5))

//transformando function potencia em array function

// function potencia(base) {
//   return function (exp) {
//     return Math.pow(base, exp)
//   }
// }

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(2))

//this
