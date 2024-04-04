//Inicio da aula sobre herança e seus conceitos, é explicado sobre o atributo .prototype e a instância [[Prototype]]
const ferrari = {
    modelo: 'f40',
    velMax: 340
}
const volvo = {
    modelo: 'v40', 
    velMax: 250
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // significa que ferrari tem uma classe pai e ela possui o atributo prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // O objeto pototype tem um attributo prototype e ele é nulo

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto)// ambos são uma função
console.log(Object.prototype, MeuObjeto.prototype)