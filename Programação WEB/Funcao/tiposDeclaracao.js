console.log(soma(3,5))
// function declaration - pode ser chamado antes da declaração
function soma(x, y){
    return x + y
}

//function expression - não é possível chamar antes de ser declarada
const sub = function (x, y) {
    return x-y
}

//named function expression não é possível chamar antes de ser declarada
const mult = function mult(x, y) {
    return x*y
}

console.log(sub(3, 5))

console.log(mult(3,5))