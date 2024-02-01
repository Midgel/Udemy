function getInteiroAleatorioEntre( min, max){
    const valor =  Math.random() * (max - min)+min
    return Math.floor(valor)
}

let valor2 = 0

while (valor2 != -1)
{
    valor2 = getInteiroAleatorioEntre (-1,10)
    console.log('Oopção escolhida foi '+ valor2 +'.')
}

console.log('Até a próxima!!')