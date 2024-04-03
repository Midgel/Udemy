/*40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

const createArrayDouble = function (min, max, quantity) {
    let array = []
    for (i = 0; i < quantity; i++){
        array[i] = (Math.random() * (max - min) + min).toFixed(2);
    }
    return array
}

const array = createArrayDouble(0, 10, 5)

function conceito(notas) {
    for (i = 0; i < notas.length; i++){
        if (notas[i] > 0 & notas[i] <= 4.9) {
            console.log(`Nota ${notas[i]} é conceito D`)
        } else if (notas[i] >= 5 & notas[i] <= 6.9) {
            console.log(`Nota ${notas[i]} é conceito C`)
        }else if (notas[i] >= 7 & notas[i] <= 8.9) {
            console.log(`Nota ${notas[i]} é conceito B`)
        }else if (notas[i] >= 9 & notas[i] <= 10) {
            console.log(`Nota ${notas[i]} é conceito A`)
        }
    }
}
conceito(array)