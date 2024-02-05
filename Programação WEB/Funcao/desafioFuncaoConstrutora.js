//criação da função construtora
function pessoa(nome,sobrenome, idade){
    //atributo privado
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    let nascimento = anoAtual-idade
    //método publico 
    this.nome = nome 
    this.sobrenome = sobrenome
    this.idade = idade
    //método publico 
    this.falar = function (){
        console.log (`Meu nome é: ${nome} ${sobrenome} e nasci em ${nascimento}`)
    }
}

const p1 = new pessoa('Mathias', 'Aguiar', 23)
p1.falar()
console.log(p1.nome)