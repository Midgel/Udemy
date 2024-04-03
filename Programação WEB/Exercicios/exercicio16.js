/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

const calculadora = function (valor1, operador, valor2) {
    switch (operador) {
        case '-':
            sub = valor1 - valor2;
            console.log(`Subtração é: ${sub}`);
            break
        case '+':
            soma = valor1 + valor2;
            console.log(`Soma é: ${soma}`);
            break
        case '*':
            mult = valor1 * valor2;
            console.log(`Multiplicação é: ${mult}`);
            break
        case '/':
            divi = valor1 / valor2;
            console.log(`Divisão é: ${divi}`);
            break
        default:
            console.log("Operação desconhecida");
    }
}

calculadora(1, '*',2)