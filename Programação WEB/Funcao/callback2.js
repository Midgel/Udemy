const notas = [7.7, 6.5, 5.2, 3.6, 7.1, 9.8]

// Sem usar o callback
let notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Usando callback
notasBaixas = notas.filter(function(nota){
    return nota<7
})

console.log(notasBaixas)
//exime a necessidade de um FOR

//exemplo 3 adicionando arrow e usando callback
const notasMenorQueSete = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQueSete)
console.log(notasBaixas3)