const pessoa = {
    nome: 'Eduardo',
    idade: 36,
    endereco: {
        logradouro: 'Rua General Marinho',
        numero: 99
    }
};

const { nome = 'Fulano de Tal', idade: i } = pessoa;

console.log(nome, i);

const { endereco: { logradouro: rua, numero: n } } = pessoa;

console.log(rua, n);
