// Wrong
// const moduloA = require('../../moduloa')

// Correct
const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const c = require('./pastaC')

console.log(c.ola2)

// Node core modules
const http = require('http')

http.createServer((req, res) => {
    res.write('Bom dia HTTP')
    res.end()
}).listen(8080)
