const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gusmão',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }],
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)

console.log(notas1)

const notas2 = escola.flatMap(getNotasTurma)

console.log(notas2)
