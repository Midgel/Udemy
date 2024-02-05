//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calculadora(numero1, numero2) {
    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let mult = numero1 * numero2
    let divisao = numero1 / numero2
    array = [soma,subtracao,mult,divisao]
    return array
}

console.log(calculadora(5, 5 ))