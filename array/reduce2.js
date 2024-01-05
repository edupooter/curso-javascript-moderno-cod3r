const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Todos alunos são bolsistas?
const todosbolsistas = (resultado, bolsista) => resultado && bolsista

const resultado = alunos.map(a => a.bolsista).reduce(todosbolsistas)

console.log(resultado)

// Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista

const result = alunos.map(a => a.bolsista).reduce(algumBolsista)

console.log(result)
