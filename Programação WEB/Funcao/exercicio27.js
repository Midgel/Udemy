/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/


const calculaAltura = function (altura, tx_cres, altura2, tx_cres2) {
    let caso = 0
    let efeito
    let loops = 0
    if (altura>altura2 && tx_cres>=tx_cres2) {
        caso = 1
        efeito = "1 sempre será maior"
    } else if(altura>=altura2 && tx_cres<tx_cres2) {
        caso = 2
        efeito = "2 ultrapassará 1"
    } else if (altura2 > altura && tx_cres2 >= tx_cres) {
        caso = 3
        efeito = "2 sempre será maior"
    } else if(altura2>=altura && tx_cres2<tx_cres){
        caso = 4
        efeito = "1 ultrapassará 2"
    } else {
        caso = 5
    }
    switch (caso) {
        case 1:
            console.log(`A criança 1 sempre será maior que a criança 2`);
            break;
        case 2:
            diferenca = altura - altura2;
            while (altura2 < altura) {
                altura = altura+(altura * tx_cres);
                altura2 = altura2+(altura2 * tx_cres2);
                loops+=1
            }
            console.log(`A criança 2 ultrapassará a criança 1 em ${loops} anos. Altura 1: ${altura}, Altura 2: ${altura2}`);
            break;
        case 3:
            console.log(`A criança 2 sempre será maior que criança 1`);
            break;
        case 4:
            diferenca = altura2 - altura;
            while (altura2 > altura) {
                altura = altura+(altura * tx_cres);
                altura2 = altura2+(altura2 * tx_cres2);
                loops+=1
            }
            console.log(`A criança 1 ultrapassará a criança 2 em ${loops} anos. Altura 1: ${altura}, Altura 2: ${altura2}`);
            break;
        default:
            console.log(`As crianças possuem tamanho igual Altura 1: ${altura}, Altura 2: ${altura2}.`);
    }
}

calculaAltura(1.50,0.009, 1.20,0.010)