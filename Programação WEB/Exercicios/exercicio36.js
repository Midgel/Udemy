/*36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/
const createArray = function (min, max, quantity) {
    let array = []
    for (i = 0; i <= quantity - 1; i++) {
        array[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return array
}
module.exports = { createArray }

const createArrayDouble = function (min, max, quantity) {
    let array = []
    for (i = 0; i <= quantity-1; i++){
        array[i] = (Math.random() * (max - min) + min).toFixed(2);
    }
    return array
}

const array = createArray(0, 10, 5)
const arrayDouble = createArrayDouble(0,10,5)

function multiple(array, parameter) {
    console.log(`Array original: ${array}`)
    tamanho = array.length
    for (i = 0; i < tamanho; i++){
        array[i] = (array[i] * parameter)
    }
    console.log(`New array * parameter: ${array}`)
}

function multipleIf(array, parameter) {
    console.log(`Array original: ${array}`)
    tamanho = array.length
    for (i = 0; i < tamanho; i++){
        if(array[i]>5)
        array[i] = (array[i]*parameter)
    }
    console.log(`New array * parameter: ${array}`)
}


multiple(array, 7)

multipleIf(arrayDouble, 7)