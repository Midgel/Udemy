const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

//utiliza-se o bind para chamar a função dentro da estrutura
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

