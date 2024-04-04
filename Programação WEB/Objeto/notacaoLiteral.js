//Mudanças ocorridas no Javascript
const a = 1
const b = 2
const c = 3

//antes
const obj1 = { a: a, b: b }
//hoje 
const obj2 = { a, b }

console.log(obj1, obj2)

//Antes
const nomeAtr = 'Nota'
const valorAtr = 8.5

const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)

//hoje
const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)

const obj5 = {
    //antes
    funcao1: function () {
        //execução
    },
    //hoje
    funcao2() {
        //execução
    }
}

console.log(obj5)