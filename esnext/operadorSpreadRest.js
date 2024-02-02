// Operador rest é usado como parâmetro para juntar múltiplos argumentos
function operador(...args) { }

// Operador spread é usado com objeto para espalhar atributos
const funcionario = { nome: "Maria", salario: 1459.65 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Operador spread é usado com array
const grupoA = ['João', 'Glória', 'José']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)
