function exec(fn, a, b) {
  return fn(a, b)
}

const somarNoTerminal = (a, b) => console.log(a + b)
const subtraiNoTerminal = (a, b) => console.log(a - b)
const subtrair = (a, b) => a - b


exec(somarNoTerminal, 56, 38)
exec(subtraiNoTerminal, 182, 27)
const resultado = exec(subtrair, 2, 2)
console.log(resultado)

const cb = () => console.log('Exec...')
setInterval(cb, 2000)
