Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.9}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caderno", "preco": 7.5}',
]

// Retornar array com apenas preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
