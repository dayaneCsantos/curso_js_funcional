function funcionaOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      // con.log('temp')
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  })
}

funcionaOuNao('Testando...', 0)
  .then(v => `valor${v}`)
  .then(console.log)
  .catch(err => console.log(`Erro: ${err}`))
  .then(console.log('Fim!'))