/*25) Escrever um programa para exibir os números de 1 até 50 na tela.*/

function imprimeValor(quantidade) {
    while (quantidade >= 0) {
        console.log(quantidade);
        quantidade -= 1
    }
}

imprimeValor(50)