/*28)Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const numeros = [10, 11, 23, 54, 66, 11, 1, 2]

function verificaNumeros(numeros) {
    let i = numeros.length
    console.log(i)
    let pares = []
    let inpares = []
    let countp = 0
    let counti = 0
    while (i>=0) {
        if (numeros[i] % 2 == 0) {
            pares[i] = numeros[i]
            countp+=1
        } else {
            inpares[i] = numeros[i]
            counti+=1
        }
        i-=1
    }
    console.log(`Pares: ${pares} (${countp}) || Ímpares: ${inpares} (${counti-1})`)
}

verificaNumeros(numeros)