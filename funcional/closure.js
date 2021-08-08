// Closure é quando uma função "Lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const somarXMais3 = require('./closure_escopo')

// const x = 1000 // A função lembra o escopo definido, em seu escopo ja é definido que x=3
// console.log(somarXMais3())

const x = 1000 // A função lembra o escopo definido, em seu escopo ja é definido que x=3
console.log(somarXMais3())
