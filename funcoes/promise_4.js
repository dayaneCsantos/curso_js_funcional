function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise(resolve => {
    setTimeout(function () {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarValorNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 1000)
  ])
}

console.time('promise')

gerarValorNumeros()
  .then(numeros => console.log(numeros))
  .then(() => {
    console.timeEnd('promise')
  })
  