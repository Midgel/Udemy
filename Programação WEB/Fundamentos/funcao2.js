//Armazenando função em variável
const imprimirSoma = function( a,b){
    console.log(a+b);
}

imprimirSoma(2,3) 

// Armazenando uma função arrow em uma vbarável
const soma = (a,b)=>{
    return a+b;
}

console.log(soma(2,5))

//retorno implícito
const subtracao = (a,b) => a-b
    console.log(subtracao(10,7))
