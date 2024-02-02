const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('vue', { framework: true })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('vue').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [12345, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(12345))
chavesVariadas.delete(12345)
console.log(chavesVariadas.has(12345))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')

console.log(chavesVariadas)
