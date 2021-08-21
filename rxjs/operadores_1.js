// Há dois tipos de operadores

// 1. Operadores de criação
const { from, of } = require('rxjs')

// 2. Operadores Encadeáveis(Pipable Op.)
const { last, map } = require('rxjs/operators')

from([1, 2, 'Ana', false, 'último'])
  .pipe(
    last(),
    map(v => v[0]),
    map(v => `A última letra encontrada foi: ${v}`)
  )
  .subscribe(function (valor) {
    console.log(valor)
  })
  