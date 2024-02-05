//criar função fabrica
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}


console.log(criarProduto("Teclado", 25))
console.log(criarProduto("Mouse", 14))