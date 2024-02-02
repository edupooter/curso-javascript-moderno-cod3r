for (const letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (const i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntos = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (const chave of assuntos.keys()) {
    console.log(chave)
}

for (const valor of assuntos.values()) {
    console.log(valor)
}

for (const [ch, vl] of assuntos.entries()) {
    console.log(ch, vl)
}

console.log(assuntos)
