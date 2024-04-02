/*21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/
const calculaValor = function (idade) {
    let valorPagar = 0;
    let inicial = 100;
    let caso = 0;
    if (idade<10) {
        caso = 1
    } else if (idade>=10 && idade <30) {
        caso = 2
    } else if (idade>=30 && idade <60) {
        caso = 3
    } else if (idade>=60) {
        caso = 4
    }
    switch (caso) {
        case 1:
            valorPagar = inicial + 80;
            console.log(`Valor a pagar: ${valorPagar}`);
            break;
        case 2:
            valorPagar = inicial + 50;
            console.log(`Valor a pagar: ${valorPagar}`);
            break;
        case 3:
            valorPagar = inicial + 95;
            console.log(`Valor a pagar: ${valorPagar}`);
            break;
        case 4:
            valorPagar = inicial + 130;
            console.log(`Valor a pagar: ${valorPagar}`);
            break;
    }
}

calculaValor(9)