// tabela verdade operadores E e Ou

function compras(trabalho1, trabalho2){
    //Opera OU
    const comprarSorvete = trabalho1 || trabalho2
    //Opera E
    const comprarTV50 = trabalho1 && trabalho2
    //Xor
    const comprarTV32 = trabalho1 != trabalho2
    //negação unário
    const manterSaudavel = !comprarSorvete 

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))

console.log(compras(true, false))

console.log(compras(false, true))

console.log(compras(false, false))