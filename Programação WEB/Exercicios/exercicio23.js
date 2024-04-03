/*23)Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const calculaNota = function (nota1, nota2, nota3, codigo) {
    let caso = 0
    let final = 0
    if (nota1 > nota2 && nota1 > nota3) {
        caso = 1;
    } else if (nota2>nota1 && nota2>nota3) {
        caso = 2;
    } else {
        caso = 3;
    }
    switch (caso) {
        case 1:
            final = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);
            if (final >= 5) {
                console.log(`Aluno código (${codigo}) APROVADO com a nota final ${final}`);
            } else {
                console.log(`Aluno código (${codigo}) REPROVADO com a nota final ${final}`);
            }
            break;
        case 2:
            final = (nota2 * 0.4) + (nota1 * 0.3) + (nota3 * 0.3);
            if (final >= 5) {
                console.log(`Aluno código (${codigo}) APROVADO com a nota final ${final}`);
            }else {
                console.log(`Aluno código (${codigo}) REPROVADO com a nota final ${final}`);
            }
            break;
        case 3:
            final = (nota3 * 0.4) + (nota2 * 0.3) + (nota1 * 0.3);
            if (final >= 5) {
                console.log(`Aluno código (${codigo}) APROVADO com a nota final ${final}`);
            }else {
                console.log(`Aluno código (${codigo}) REPROVADO com a nota final ${final}`);
            }
            break;
        default:
            console.log(`Talvez algo esteja errado.`);
            break;
    }
}

calculaNota(8,7,9, 1752)