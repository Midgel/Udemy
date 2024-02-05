//iremos comparar a criação de uma classe com uma função factory

//Clase padrao em JS
class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Jão')
pessoa1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}
const pessoa2 = criarPessoa('Julia')
pessoa2.falar()