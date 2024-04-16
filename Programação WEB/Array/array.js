//Array é um objeto, masn não existe um tipo de dados array
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Marcio', "Coder", "String")

console.log(aprovados)

aprovados = ["Bia", "Arthur", "Julia"]

console.log(aprovados[0])
aprovados.push("Saulo")
console.log(aprovados)
console.log(aprovados.length)