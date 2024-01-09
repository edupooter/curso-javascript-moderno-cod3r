console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('This em uma função aponta para exports?')
    console.log(this === exports)
    console.log('This em uma função se torna global?')
    console.log(this === global)
    console.log('This nesta função é o objeto global?')
    console.log(this)
}

logThis()

console.log(global)
