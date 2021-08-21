const realine = require('readline')

function obterResposta(pergunta) {
  const rl = realine.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp)
      rl.close()
    })
  })
}
// obterResposta('Esse é um teste?')
//   .then(console.log)

//observer
function namorada() {
  console.log('N: Apagar as luzes...')
  console.log('N: Pedir silêncio...')
  console.log('N: Surpresa!!!!!')
}

// Observer
function sindico(evento) {
  console.log('S: Monitorar o barulho')
  console.log(`S: Info->${evento.resp}`)
  console.log(`S: Data->${evento.data}`)

}

// Subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta('O namorado chegou? (S- Sim, N- Não, q- Sair)')
    if (resp.toLowerCase() === 's') {
      (interessados || []).forEach(obs => obs({ resp, data: new Date() }))
    } else if (resp.toLowerCase() === 'q') {
      break
    }
  }
}

/*
  Chamada da função -> Registra os dois observadores
  Os observadores são: Namorada e sindico
  O subject é o porteiro (Quem monitora e notifica os observer)

*/

porteiro([namorada, sindico])
