//Algumas funções importantes/cruciais para objetos

const pessoa = {
    nome: 'Midge',
    idade: 330,
    peso: 22
}

console.log(Object.keys(pessoa)) //pega os atributos que existem
console.log(Object.values(pessoa)) //pega as respostas dos atributos
console.log(Object.entries(pessoa)) //traz os atributos e os respectivos valores

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) //usando a desestruturação do js para percorrer todo os elementos com o forEach

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2000'
}) //definir uma propriedade dentro do objeto pessoa

pessoa.dataNascimento = '01/01/2024' //não funcionará
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // verifica-se que agora há a propriedade dataNascimento

//Object.assign = inputa parametros de outros objetos no objeto escolhido
const dest = { a: 1 }
const o1 = { b: 3 }
const obj = Object.assign(dest, o1)
console.log(obj)

Object.freeze(obj) // impossibilita alteraçoes no objeto
obj.b = 150
console.log(obj)