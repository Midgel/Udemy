/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const calculaSalario = function (salario, plano) {
    aumento = 0;
    switch (plano) {
        case "A":
            aumento = (salario * (0.1));
            salario = salario + aumento;
            console.log(`Parabéns você recebeu aumento de ${aumento}, seu novo salário é ${salario}. `)
            break
        case "B":
            aumento = (salario * (0.15));
            salario = salario + aumento;
            console.log(`Parabéns você recebeu aumento de ${aumento}, seu novo salário é ${salario}. `)
            break
        case "C":
            aumento = (salario * (0.2));
            salario = salario + aumento;
            console.log(`Parabéns você recebeu aumento de ${aumento}, seu novo salário é ${salario}. `)
            break
        default:
            console.log("Desculpe não reconhecemos este plano.");
    }
}

calculaSalario(2500,"C")