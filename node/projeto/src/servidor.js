const porta = 3003

const bancoDados = require('./bancoDados')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos/', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.status(201).send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.excluirProduto(req.params.id)
    res.status(204).send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor express executando na porta ${porta}...`)
})
