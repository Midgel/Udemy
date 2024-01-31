function soBoaNoticia(nota){
    if (nota >=7){
        console.log('Aprovado com '+nota)
        }
    else{
        console.log('Reprovado com '+ nota)
    }
}

soBoaNoticia(8.0)
soBoaNoticia(6.2)

function seForVerdadeFalo(valor){
    if(valor) {
        console.log('É verdade ...'+ valor)
    }
}

seForVerdadeFalo()
seForVerdadeFalo(null)
seForVerdadeFalo(undefined)
seForVerdadeFalo(NaN)
seForVerdadeFalo('')
seForVerdadeFalo(0)
seForVerdadeFalo(-1)
seForVerdadeFalo(' ')
seForVerdadeFalo('?')
seForVerdadeFalo([])
seForVerdadeFalo([1,2])
seForVerdadeFalo({})

