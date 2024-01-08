const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

// 1º exemplo tirado da doc oficial (https://axios-http.com/docs/example)
const json = axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response)
    })
    .catch(function (error) {
        // handle error
        console.log(error)
    })
    .finally(function () {
        // always executed
    })

// 2º exemplo, async, muito usado em projeto com bloco try/catch
async function getJson(params) {
    try {
        const res = await axios.get(params)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

getJson(url)


// 3º exemplo, tirado da aula n. 154 do Curso
axios.get(url).then(res => {
    const funcionarios = res.data
    console.table(funcionarios)
})
