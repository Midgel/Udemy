// closure é o escopo criado quando uma função é declarada
//Esse escopo permite que a funçao acesse e manipule variaveis externas à função

//Exemplo
const x = 'Global'

function out(){
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhafnc = out()
console.log(minhafnc())