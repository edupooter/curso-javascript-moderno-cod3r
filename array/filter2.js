Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        const element = this[i]
        if (callback(element, i, this)) {
            newArray.push(element)
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p) {
    return p.preco > 15
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const resultado = produtos.filter2(caro).filter2(fragil)

console.log(resultado)
