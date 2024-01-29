const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrono
const conteudo = fs.readFileSync(caminho, 'utf8')

console.log(conteudo)

// assíncrono
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// importação de JSON
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})
