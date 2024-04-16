// Object.preventExtensions - não possibilita aumentar o numeros de parametros no objetos
const produto = Object.preventExtensions({
    nome: "Juliano", preco: 150.33, tag: 'Promoção'
})

console.log("Extensivel", Object.isExtensible(produto)) // não é hábil extensão

produto.nome = "borracha"
produto.descricao = "borracha escolar rosa"
//vamos deletar a tag do produto
delete produto.tag
console.log(produto)

//Object.seal - possibilita mexer nos atributos, mas não excluir
const pessoa = { nome: "juju", idade: 45 }
Object.seal(pessoa)
console.log("selado:", Object.isSealed(pessoa)) // retorna true porque o objeto foi selado

pessoa.sobrenome = "Silvana" //não é possível incluir novos parametros em objetos selados
delete pessoa.nome // Não é possível excluir parametros
pessoa.idade = 30 // É possível alterar os dados dos parametros
console.log(pessoa)

// Object.freeze = selado + valores inalteráveis /writable=false 
