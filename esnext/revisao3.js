// ES8: Object.values / Object.entries / Object.keys
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

// Melhorias na notação literal de objeto
const nome = "Carla"
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoa.nome)
console.log(pessoa.ola())

// Classe
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}

const cachorro = new Cachorro()

console.log(cachorro.falar())
