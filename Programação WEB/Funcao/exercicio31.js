/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const array = [-1, 5, 3, 6, -5, -22, 0, 100, -12]

function countNegatives(array) {
    quantity = 0;
    for (i = 0; i <= array.length; i++){
        if (array[i] < 0) {
            quantity = quantity + 1;
        }
    }
    console.log(`Quantidade de elementos negativos: ${quantity}`);
}

countNegatives(array)