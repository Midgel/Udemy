// Exemplo com operador New do 0

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula = new Aula('Bem vindo', 1) // o NEW é o ponto nessa aula
const aula2 = new Aula("Chefe logo", 2)
console.log(aula, aula2)

//criar uma função que simula o operador NEW
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
//criação dos elementos com o "NOVO" ao invés do New
const aula3 = novo(Aula, 'Bem venido', 3)
const aula4 = novo(Aula, "Olá", 4)

console.log(aula3, aula4)