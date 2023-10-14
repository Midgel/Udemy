//Explicação sobre Node e Runtime
let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// crimos uma variavel doida pra explicar o funcionsamento do node.js em comparação com o WEB onde tudo é global
abc = 3 // naum faça aissu

console.log(global.abc)
