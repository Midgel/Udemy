//Como criar uma cadeia de prototipos  
Object.prototype.attr0 = "Alfa" //um objeto sempre vai apontar para o objeto.prototype
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr3, filho.attr2, filho.attr1, filho.attr0) //cadeia de prototipos

//criação do objeto pai
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}
//filho 1
const ferrari = {
    modelo: 'F40',
    velMax: 350
}
//filho 2
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro)
console.log(ferrari) //só mostra aquilo que foi definido no objeto
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())
ferrari.acelerar(150)
console.log(ferrari.status())