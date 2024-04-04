//Criando com notação literal de objetos
const objeto1 = {}

//criando usando o Object
const objeto2 = new Object

//Criando usando funções construtoras
function Produto (nome, preco, desconto){
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = () => {
        return preco * (1-desconto)
    }
}

const p1 = new Produto('Carrao', 85000, 0.1)
const p2 = new Produto('Carrinho', 49900, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Criando usando a função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30-faltas)
        }
    }
}
const f1 = criarFuncionario('Jao', 3000, 2)
console.log(f1.getSalario())

//Usando Object.create
const filha = Object.create(null)
filha.nome = 'Aninha'
console.log(filha)

//Criando uma função que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)