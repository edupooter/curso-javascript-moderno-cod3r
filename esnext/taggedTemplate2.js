// Tagged template com parse em variáveis interpoladas
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 21.99
const parcela = 11

console.log(real`1x de ${preco} ou 3x de ${parcela}`)
