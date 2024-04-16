// Função e atributo prototipe da função

function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const objeto = new MeuObjeto
const objeto2 = new MeuObjeto
console.log(objeto.__proto__ === objeto2.__proto___) // deve retornar true pois ambos foram definidos pelo mesmo pai
console.log(MeuObjeto.prototype === objeto.__proto__)

MeuObjeto.prototype.nome = "None"
MeuObjeto.prototype.falar = function () {
    console.log(`Boun Jorno! My name is ${this.nome}`)
}

objeto.falar()
objeto.nome = "Samba"
objeto.falar()

const objeto3 = {} // cria-se um novo objeto
objeto3.__proto__ = MeuObjeto.prototype // afilia-se este objeto ao "meuObjet"
objeto3.nome = "Anderson" // após afiliação ele é capaz de ter os atributos do objeto pai
objeto3.falar()

//alguns testes
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // verificante se um novo objeto tem o mesmo prototype de um ObjetoPrototype ja criado
console.log(MeuObjeto.__proto__ === Function.prototype) //todo prototype de um objeto aponta para o Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)