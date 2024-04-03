/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function verificaUtil(dia) {
    switch (dia) {
        case 7: 
            console.log('Sábado não é um dia util');
            break
        case 6: 
            console.log('Sexta-Feira é um dia util');
            break
        case 5: 
            console.log('Quinta-feira é um dia util');
            break
        case 4: 
            console.log('Quarta-feira é um dia util');
            break
        case 3: 
            console.log('Terça-feira é um dia util');
            break
        case 2: 
            console.log('Segunda-Feira é um dia util');
            break
        case 1: 
            console.log('Sábado não é um dia util');
            break
        default:
            console.log('Valor inválido');
            break
    }
}

console.log(verificaUtil(7));