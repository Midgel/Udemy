// função que retorna um obj
//uso padrao
const produto = {
    nome: 'Copo',
    preco: 1.45
}

const produto2 = {
    nome: 'Teto',
    preco: 1.45
}
//isso se torna repetitivo

//podemos usar
function criarPessoa() {
    return {
        nome: 'Julias',
        sobrenome: 'Robertis'
    }
}

console.log(criarPessoa())