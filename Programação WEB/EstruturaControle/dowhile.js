function getInteiroAleatorioEntre( min, max){
    const valor =  Math.random() * (max - min)+min
    return Math.floor(valor)
}

let valorNovo = 0

do {
    valorNovo = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${valorNovo}`)
} while(valorNovo != -1)

console.log(`Até a próxima!!`)