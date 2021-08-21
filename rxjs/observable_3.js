// desafio
// criar um stream de numeros
// entre min e max com Observable!

const { Observable, noop } = require('rxjs')

function entre(min, max) {
  return new Observable(subscriber => {
    for (let i = min; i <= max; i++) {
      subscriber.next(i)
    }
    subscriber.complete()
  })
}

entre(1, 10).subscribe({
  next(valor) {
    console.log(`Num: ${valor}`)
  },
  noop,
  complete() {
    console.log('Fim!')
  }
})
