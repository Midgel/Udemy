function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // parametros ok
console.log(area(2)) //parametros errados
console.log(area()) // ?? kk o cara aceita isso
console.log(area(2, 3, 17, 22, 4555)) //sabio
console.log(area(5,5)) //massa