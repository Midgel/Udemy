//Comparação entre JSON (javascriptObject notation) e OBJ

const objeto = { a: 10, b: 50, c: 100 }
console.log(JSON.stringify(objeto)) //connverter um objeto em JSON

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) //invalido
//console.log(JSON.parse("'a': 1")) // também invalido
console.log(JSON.parse('{"a": 1, "b": 10, "c":50}')) // atributos de um JSON deve ser delimitados por aspas duplas
console.log(JSON.parse('{"a": "palavra", "b": true, "c": {}}'))

//Json é por tudo uma classe de texto