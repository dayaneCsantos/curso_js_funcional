const fs = require('fs')
const path = require('path')

function lerArquivos(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString())
    })
    console.log('Depois de ler')
  })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivos(caminho)
  // .then(conteudo => conteudo.split('\n'))
  // .then(linhas => console.log(linhas.length))
  .then(conteudo => console.log(conteudo))
  