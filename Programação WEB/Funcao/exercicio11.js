/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

function verificaBissexto(ano) {
    bissexto = false
    if (ano % 400 == 0) {
        bissexto = true
    } else if (ano % 100 == 0) {
        bissexto = false
    } else if (ano % 4 == 0) { 
        bissexto = true
    }
    if (bissexto == true) {
        console.log(`O ano ${ano} é bissexto!`)
    } else {
        console.log(`O ano ${ano} não é bissexto!`)
    }
    return bissexto
}

console.log(verificaBissexto(1796))