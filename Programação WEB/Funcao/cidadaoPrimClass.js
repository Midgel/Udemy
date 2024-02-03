// Funções em JS é FSO - First Class Object
// H-o higher-order function

//criar uma função de forma literal
function funcao1() {
}

//Armazenar a função em uma variável
const funcao2 = function () {
}

//Armazenar a função em um array (vetor)
const array = [function (a, b) { return a + b }, funcao1, funcao2]
console.log(array[0](2, 3))

//Armazenar em um atributo de um objeto
const obj = {} //definição do objeto vazio
obj.falar = function () { return 'Opa' } //Objeto "obj" na variavel "falar" cria a função que retorna 'Opa
console.log(obj.falar())

//Como passar uma função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

//Uma função pode retornar ou conter uma função
function soma(a, b) { //função 1
    return function (c) { //retorno da função 2
        console.log(a+b+c)
    }
}
soma(2, 3)(4) //usando a função e sua chamada de função interna
const continha = soma(2, 3) //cria-se uma nova função e inputa os valores
continha(4) // chama a ultima função criada com o valor da segunda função (soma)