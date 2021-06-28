const fs = require('fs') // blibioteca para ler o arquivo
const path = require('path')  // biblioteca para pegar o caminho do arquivo

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo) { // Quando não usa o parâmetro é muito comum usar o _
  console.log(conteudo.toString())
}

console.log('Inicio') // Não irá ficar aguardando a resposta, callback é usado quando o código é assincrono, a função será chamada quando o arquivo for lido
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim')

console.log('Inicio Sync') // irá ficar aguardando a resposta para continuar
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync')