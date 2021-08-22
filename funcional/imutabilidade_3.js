const pessoa = {
  nome: 'Maria',
  altura: 1.76,
  cidade: 'São Paulo',
  end: {
    rua: 'feliz'
  }
}

// atribuição por referência

const outraPessoa = pessoa

// Passagem por referência (função impura)

function alterarPessoa(pessoa) {
  const novaPessoa = { ...pessoa } // é um clone raso, apenas no primeiro nível
  novaPessoa.nome = 'João'
  novaPessoa.cidade = 'BH'
  novaPessoa.end.rua = 'Avenida' // Irá alterar o objeto original
  return novaPessoa
}

const novaPessoa = alterarPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)


let a = 3
let b = a // atribuição por valor(copia de a em b)

a++
b--

console.log(a, b)
