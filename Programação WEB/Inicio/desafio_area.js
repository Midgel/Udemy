//area da circunferencia =  PI*raio^2


let pi = 3.14;
let raio = 7;

let areaCirc =  pi*(raio*raio);
console.log("O valor da área é "+areaCirc+"m2.");
console.log(Math.PI);
let areaCircPI = Math.PI*(raio*raio);
console.log("O valor da área é "+areaCircPI+"m2.");
let dif = areaCirc - areaCircPI;
console.log("A diferença entre pi e Math.PI é "+dif);