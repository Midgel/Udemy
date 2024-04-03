/*Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
23)*/

const meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const calculaValor = function (mes, valor) {
    let  valorPago = 0
    switch (mes) {
        case 1:
            valorPago = valor;
            console.log(`Valor pago: ${valorPago}`)
            break;
        default:
            mesAtual = mes - 1;
            valorPago = (valor * (1 + 0.05) ** mesAtual);
            console.log(`Valor pago: ${valorPago}`)
            break;
    }

}

calculaValor(5,100);