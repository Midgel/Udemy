/*33
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console*/
const { createArray } = require('./exercicio32.js');

const createArrayDouble = function (min, max, quantity) {
    let array = []
    for (i = 0; i <= quantity-1; i++){
        array[i] = (Math.random() * (max - min) + min).toFixed(2);
    }
    return array
}

const array       = createArray(0, 100, 4)
const arrayString = ['Múmia', 'Palavra', 'Busca', 'Madrid']
const arrayDouble = createArrayDouble(0, 100, 4)

function concatenar(vetorInt, vetorString, vetorDouble) {
    concaten = vetorInt.concat(" || ", vetorString," || ", vetorDouble)
    console.log(`Elementos dos vetores ${concaten}`)
    concaten2 = vetorString.concat(" || ", vetorInt, " || ", vetorDouble)
    console.log(`Elementos dos vetores ${concaten2}`)
}

concatenar(array, arrayString, arrayDouble)