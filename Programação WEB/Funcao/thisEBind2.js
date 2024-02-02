function Pessoa() {
    this.idade = 0

    const self = this // opção 2, que faz o this nao variar por estar atrelado a uma função
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this) Isso aqui ja funciona*/, 1000)
}

new Pessoa