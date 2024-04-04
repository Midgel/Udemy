//Coleção dinamica de pares cahve/valor

const produto = new Object
produto.nome = 'Mesa'
produto['marca'] = 'Kingston'
produto.preco = 3000

console.log(produto)

delete produto.preco
console.log(produto)

const carro = {
    modelo: 'C4 Pallas',
    valor: 80300,
    proprietario: {
        nome: "Midgel", 
        idade: 23,
        endereco: {
            rua: "Iapo"
        }
    },
    condutores: [{
        nome: "ariana",
        idade: 22
    }, {
            nome: 'armin',
            idade: 55
        }],
    calculaIPVA: function () {
        // função calculando o ipva
    }
}

carro.proprietario.endereco.rua = 'Renato'
carro['proprietario']['endereco']['rua'] = 'Menarin'

console.log(carro)

delete carro.calculaIPVA
console.log(carro)