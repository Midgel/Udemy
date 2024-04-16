//Mostrar como funciona herança em classe

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor"){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(profissao, robby = "jogar") {
        super("Borges")
        this.robby = robby
    }
}
const filho = new Filho

console.log(filho)