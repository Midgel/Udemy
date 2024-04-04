// porque criar objetos constantes
const pessoa = { nome: 'Joao' }
//quando acessado, altera-se o valor do ponteiro que aponta, não o ponteiro em si
pessoa.nome = 'Juca'
console.log(pessoa)

//sintaxe invalida
//pessoa = {nome: "maria"}

//congelar o objeto para não ser mais alterável
Object.freeze(pessoa)
pessoa.nome = 'Marya'
console.log(pessoa)
