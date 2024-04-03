/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

const intervalo = [10, 20]

function verificaNumero(vetor) {
    let countS = 0
    let countN = 0
    
    for (i = 0; i <= vetor.length; i++){
        if (vetor[i] >= intervalo[0] && vetor[i] <= intervalo[1]) {
            countS += 1
        } else {
            countN += 1
        }
    }
    console.log(`Dentro: ${countS} || Fora: ${countN-1} `)
}

const vetor = [7,10,11,25,33,12,58,200,100,20,19]
verificaNumero(vetor)