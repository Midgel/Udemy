/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function jurosSimples(capInicial, txJuros, tempo) {
    calcula = (capInicial * txJuros * tempo)+capInicial
    return calcula
}
console.log(jurosSimples(100, 0.01, 60))

function jurosCompostos(capInicial, txJuros, tempo) {
    calcula = (capInicial*((1 + txJuros)**tempo))+capInicial
    calcReduz = calcula.toFixed(2);
    return calcReduz
}
console.log(jurosCompostos(100, 0.01, 60))