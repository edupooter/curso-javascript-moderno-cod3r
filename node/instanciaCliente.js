const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')


const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log('A', contadorA.valor, 'B', contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log('C', contadorC.valor, 'D', contadorD.valor)
