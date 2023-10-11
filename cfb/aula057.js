// entendendo mais...
// podemos criar propriedade alem de metodos

class Carro {
    constructor(pnome, ptipo){
        this.nome = pnome
        switch (ptipo) {
            case 1:
                this.tipo = "Esportivo"
                this.velMax= 300
                break;
            case 2:
                this.tipo = "Utilitário"
                this.velMax= 100
                break;
            case 3:
                this.tipo = "Passeio"
                this.velMax= 160
                break;
            case 4:
                this.tipo = "Militar"
                this.velMax = 190
                break;
            default: "Não é um carro!"
                break;
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tip
    }
    getVelMax(){
        return this.velMax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velMax]
    }
    setNome(nome){
        this.nome = nome
    }
    info(){
        console.log(`Nome : ${this.nome} \nTipo : ${this.tipo} \nVelocidade máxima : ${this.velMax}`)
    }
}
let c1 = new Carro("Rapidão",1)
let c2 = new Carro("Super Luxo",2)
let c3 = new Carro("Bombadão",3)
let c4 = new Carro("Carrego tudo",4)

// console.log(c1.nome)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

// c1.info()
// c2.info()
// c3.info()

console.log(c1.getNome())
console.log(c1.getInfo())
console.log(c1.getInfo()[2])

c1.setNome("Super Veloz")
c1.info()