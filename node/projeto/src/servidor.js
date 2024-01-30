const porta = 3003

const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('Middleware')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.status(200).json({nome: 'Notebook', preco: 1234.5})
})

app.listen(porta, () => {
    console.log(`Servidor express executando na porta ${porta}...`)
})
