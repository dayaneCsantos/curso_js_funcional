// Uma função pura é uma função em que o valor
// de retorno é determinado apenas por seus
// valores de entrada, sem efeitos colaterias observáveis

//const PI = 3.141592

// Impura - PI é um valor externo
function areaCirc(raio) {
  return raio * raio * Math.PI
}

console.log('Area circulo impuro:', areaCirc(10))

// Puro - PI agora não depende de nenhum fator externo a função, tornando mais estável
function areaCircPura(raio, PI) {
  return raio * raio * PI
}

console.log('Area circulo puro:', areaCircPura(10, 3.14))
