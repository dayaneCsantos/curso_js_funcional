const { from, Observable } = require('rxjs')
const { last } = require('rxjs/operators')

function primeiro() {
  return function (source) {
    return Observable.create(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.next(1)
        }
      })
    })
  }
}

function nenhum() {
  return function (source) {
    return Observable.create(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.complete()
        }
      })
    })
  }
}

function ultimo() {
  return function (source) {
    return Observable.create(subscriber => {
      let ultimo
      source.subscribe({
        next(v) {
          ultimo = v
        },
        complete() {
          if (ultimo !== undefined) {
            subscriber.next(ultimo)
          }
          subscriber.complete()
        }
      })
    })
  }
}

from([1, 2, 3, 4, 5])
  .pipe(
    // primeiro(),
    // nenhum(),
    ultimo()
  )
  .subscribe(console.log)


  // .pipe(
  //   last(),
  //   map(v => v[0]),
  //   map(v => `A última letra encontrada foi: ${v}`)
  // )