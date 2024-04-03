/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const arrayString = 'O meu heroi e o homem de ferro'
const arrayString2 = 'meu'

function verifyString(string, string2) {
    let compare = string.includes(string2)
    console.log(compare)
    if (compare == true) {
        console.log(`O termo "${string2}" foi encontrado na string "${string}"`)
    } else {
        console.log(`O termo "${string2}" não foi encontrado na string "${string}"`)
    }
    
}

verifyString(arrayString, arrayString2)
