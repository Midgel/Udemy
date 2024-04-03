/*38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const inicio = 0
const fim = 100

function findInpar(inicio, fim) {
    let inpares = []
    if (inicio < fim) {
        for (i = inicio; i < fim; i++){
            if (i % 2 != 0) {
                inpares[i] = i
            }
        }
    } else {
        let troca = inicio
        inicio = fim
        fim = troca
        for (i = inicio; i < fim; i++){
            if (i % 2 != 0) {
                inpares[i] = i
            }
        }
    }
    console.log(`Números ìnpares: ${inpares}`)
}
findInpar(inicio, fim)

