/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function achaPares(valor) {
    while (valor>=0) {
        if (valor%2 == 0) {
            console.log(valor);
        }
        valor -= 1
    }
}

achaPares(100)