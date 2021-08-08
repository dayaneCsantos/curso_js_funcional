// Uma função pura é uma função em que o valor
// de retorno é determinado apenas por seus
// valores de entrada, sem efeitos colaterias observáveis

// Uma função Pura é extremamente previsivel, é facil de manipular, tornando fácil ser testado
// temos controle de 100% de todos os parametros que podemos passar em uma função e de seu retorno 

// Quando temos uma função que tem dependencia externa, surge o conceito de mock
// quando simulamos uma dependência externa de uma função


// Priorize o máximo possivel funções puras, mas algum momento 
// será preciso utilizar funçõe impuras para questões especificas
// Função pura
function somarPura(a, b) {
  return a + b
}

console.log(somarPura(5, 2))

//Função impura

let qtdeDeExecucoes = 0

function somarImpuroEfeitoObservavel(a, b) {
  // Realiza alteração de algo externo a função
  qtdeDeExecucoes++
  return a + b
}

console.log(qtdeDeExecucoes)
console.log(somarImpuroEfeitoObservavel(1, 2))
console.log(somarImpuroEfeitoObservavel(1, 2))
console.log(somarImpuroEfeitoObservavel(1, 2))
console.log(somarImpuroEfeitoObservavel(1, 2))
console.log(qtdeDeExecucoes)
