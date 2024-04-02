/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor*/

const vetor = [5, 6, 8, 12, 22, 0, 135, 194, -25]

function menorMaior(vetor) {
    menorValor = vetor[0];
    maiorValor = vetor[0];
    for (i = 0; i <= vetor.length; i++){
        if (vetor[i]>maiorValor) {
            maiorValor = vetor[i];
        }
        if (vetor[i] < menorValor) {
            menorValor = vetor[i]
        }
    }
    console.log(`Menor valor ${menorValor}, Maior valor ${maiorValor}`);
}

menorMaior(vetor)