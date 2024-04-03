/*37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
bem como a soma dos elementos.*/

function aritimeticsProgression(n, a1, r) {
    termos = [a1]
    for (i = 1; i < n; i++){
        termos[i] = termos[i-1]+r
    }
    let calc = a1 + ((n - 1) * r)
    console.log(`A progressão aritimética é ${termos}, o termo ${n} é ${calc}`)
}
 
function geometricProgression(n, a1, r) {
    termos = [a1]
    for (i = 1; i < n; i++){
        termos[i] = termos[i-1]*r
    }
    let calc = a1 * (r ** (n - 1))
    console.log(`A progressão geométrica é ${termos}, o termo ${n} é ${calc}`)
}

aritimeticsProgression(5, 3, 3)
geometricProgression(5, 1, 2)