// Não é indexado e não aceita repetição
const times = new Set(['Vasco'])
times.add('Grêmio')
times.add('Flamengo').add('São Paulo').add('Coritiba')
times.add('Cuzeiro')
times.add('Grêmio')

console.log(times)
console.log(times.size)
console.log(times.has('coritiba'))
console.log(times.has('Coritiba'))

times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['João', 'Lucas', 'Pedro', 'Lucas']
const setNome = new Set(nomes)

console.log(setNome)
