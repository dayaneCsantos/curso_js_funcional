// Closure é quando uma função "Lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const x = 3

// function somarXMais3() {
//   return x + 3
// }

function fora() {
  const x = 50
  function somarXMais3() {
    return x + 3
  }
  return somarXMais3
}

// module.exports = somarXMais3

module.exports = fora()
