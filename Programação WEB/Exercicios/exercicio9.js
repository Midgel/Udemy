/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

notasPossiveis = [0, 100];
notaCorte = 40;
notaArredonda = 38;

function verificaNota(nota) {
    if (nota >= notasPossiveis[0] && nota <= notasPossiveis[1]) {
        if (nota >= notaArredonda) {
            valor = (nota / 5);
                console.log(`Valor é ${valor}`);
                valorAcima = (Math.round(valor) * 5);
                console.log(`Valor Acima é ${valorAcima}`);
                valorVerificado = valorAcima - nota;
                console.log(`Valor Verificado ${valorVerificado}`);
                if (valorVerificado < 3 && valorVerificado > 0) {
                    nota = valorAcima;;
                }
            if (nota>=notaArredonda) {
                return `Aprovado com a nota ${nota}`;
            }
        } else {
            return `Aluno reprovado com a nota: ${nota}`;
        }
    } else {
        return `A nota ${nota}, é inválida!`;
    }
    
}

console.log(verificaNota(101));