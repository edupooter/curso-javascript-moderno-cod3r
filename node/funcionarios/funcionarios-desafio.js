const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const china = funcionario => funcionario.pais === 'China'
const mulher = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, atual) => funcionario.salario < atual.salario ? funcionario : atual

// Exibir a mulher chinesa com menor salário
axios.get(url).then(res => {
    const funcionarios = res.data
    const resultado = funcionarios.filter(china).filter(mulher).reduce(menorSalario)
    console.log(resultado)
})
