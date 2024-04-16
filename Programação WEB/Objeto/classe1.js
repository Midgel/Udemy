//demonstrando classes
class Lancamento{
    constructor(nome = "aleatorio", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salario", 40500)
const contaDeLuz = new Lancamento("Luz", -250)
const contas = new CicloFinanceiro(6, 2024)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())