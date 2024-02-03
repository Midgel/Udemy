dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //o return conforme a função acima é implicito
console.log(dobro(Math.PI))

//forma padrao
let ola = function () {
    return 'Olá'
}

// com arrow
ola = () => 'Olá' // economiza linhas de código e o this é constante, não há parametros

ola = _ => 'Olá' //o _ é um parametro