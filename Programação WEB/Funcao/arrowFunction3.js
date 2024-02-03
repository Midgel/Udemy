let comparacomTHIS = function (param){
    console.log(this === param)
}
//retornará true
comparacomTHIS(global)

const obj = {}
comparacomTHIS = comparacomTHIS.bind(obj)
//retornará false
comparacomTHIS(global)
comparacomTHIS(obj)

//Retornará false
let comparacomTHISArrow = param => console.log(this === param)
comparacomTHISArrow(global)
comparacomTHISArrow(module.exports)

// Bind não altera a ordem da função Arrow
comparacomTHISArrow = comparacomTHISArrow.bind(obj)
comparacomTHISArrow(obj)
comparacomTHISArrow(module.exports)