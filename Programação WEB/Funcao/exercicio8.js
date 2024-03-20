/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao 
1 - Recebê-la irá comparar os valores um a um
2 - irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos
3 - quando fez seu pior
jogo. (Número do pior jogo).*/


function verificaResultado(valores) {
    tamanho = valores.length;
    qtd_recorde = 0;
    maiorValor = valores[0];
    menorValor = valores[0];
    positionPior = 0;
    for (i = 0; i <= tamanho; i++){
        if (valores[i]>maiorValor) {
            maiorValor   = valores[i];
            qtd_recorde += 1;
        } else if (valores[i]<menorValor) {
            menorValor = valores[i];
            positionPior = i;
        }
    }
    retorno = [qtd_recorde, positionPior+1];
    return retorno;
}

valores = [10,20,20,8,25,3,0,30,1]
console.log(verificaResultado(valores));