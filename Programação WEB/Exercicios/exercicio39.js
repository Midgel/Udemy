/*39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
const { createArray } = require('./exercicio36.js');

const arrayA = createArray(0, 100, 3)
const arrayB = createArray(0, 100, 3)

function change(arrayA, arrayB) {
    let troca = arrayA
    arrayA = arrayB
    arrayB = troca

    console.log(`Array A original: ${troca}`)
    console.log(`Array A trocado: ${arrayA}`)
    console.log(`Array B original ${arrayA}`)
    console.log(`Array B trocado: ${arrayB}`)
}

change(arrayA, arrayB)