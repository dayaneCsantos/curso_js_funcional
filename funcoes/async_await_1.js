function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo)
  })
}

// esperarPor()
//   .then(() => console.log('Executando promise 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 3...'))

function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function retornarRapido() {
  return 20
}

async function executar() {

  let valor = await retornarRapido()

  await esperarPor()
  console.log(`Async/Await ${valor}...`)
  await esperarPor()
  console.log(`Async/Await ${valor + 1}...`)
  await esperarPor()
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}
executarDeVerdade()
// const c = executar()
// console.log(c)
// executar().then(console.log)
