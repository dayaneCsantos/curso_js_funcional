const { observable, Observable } = require('rxjs')

// só conta quando vc chamou uma unica vez, resolve ou reject
const promise = new Promise(resolve => {
  resolve('Promise é show de bola')
  resolve('Promise é show de bola')
})

promise.then(console.log)

// Em um mesmo observable posso ter mais de uma subscrição
// consiguimos gerar quanto dado necessários chamando o método next
// Esta sendo gerado uma stream de dados
const obs = new Observable(subscriber => {
  subscriber.next('Observer')
  subscriber.next('é')
  subscriber.next('show')
  subscriber.next('de')
  setTimeout(() => {
    subscriber.next('bola')
    subscriber.complete()
  })

})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))
