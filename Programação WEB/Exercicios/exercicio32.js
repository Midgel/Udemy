/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/


const createArray = function (min, max, quantity) {
    let array = []
    for (i = 0; i <= quantity-1; i++){
        array[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return array
}
let array = createArray(0,100,2)
function mediaCalc(array) {
    let sum = 0
    for (i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    divisor = (array.length)
    let media = (sum / divisor)
    console.log(`A média dos elementos do array ${array} é ${media}`)
}

mediaCalc(array)

module.exports =  { createArray };