/*10) Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
ou false.*/

function verificaDivisao(valor) {
    retorno = false
    if ((valor % 3) == 0) {
        retorno = true 
    }
    return retorno
}

console.log(verificaDivisao(15))