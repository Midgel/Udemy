// par nome/ valor

const saudacao = "opa"; // contexto léxico

function exec() {
  const saudacao = "falaa"; // contexto lexio 2
  return saudacao;
}
// objetos sao grupos alinhados de apres nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 333
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
