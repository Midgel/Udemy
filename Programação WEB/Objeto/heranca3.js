// 
const pai = { nome: 'Pedrinho', corCabelo: 'Escuro' }

const filha = Object.create(pai) //cria-se a filha com base no pai
filha.nome = 'Aninha'
console.log(filha.corCabelo)

const filhaSegunda = Object.create(pai, {
    nome: {value: "Biazinha", writable: false, enumerable: true}
}) //criamos uma segunda folha com parametros mais especificos

console.log(filhaSegunda.nome)
filhaSegunda.nome = "Carlinha" //  atributo writable não permite que ocorra a alteração do nome
console.log(`${filhaSegunda.nome} tem cabelo ${filhaSegunda.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filhaSegunda))

// iterar sobre as chaves do objeto e saber quais vieram por herança e quais foram definidas "na mão"
for (let key in filhaSegunda) {
    filhaSegunda.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}