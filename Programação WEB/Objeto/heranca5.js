// tudo é function
console.log(typeof String) // é uma função
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
return this. split('').reverse().join('')
}

console.log(`Escola Amanda`.reverse()) // deixa a função ao contrário

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // pegar o primeiro elemento do array

String.prototype.toString = function () {
    return "Não faça isso!"
} //pode dar muito problema
console.log("Escola Amanda".toString())