// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// template string
const produto = 'iPad'

console.log(`${produto}
é caro
!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , z] = [1, 2, 3]
console.log(x, z)

const { idade: i, nome } = { nome: "Ana", idade: "23" }
console.log(i, nome)
