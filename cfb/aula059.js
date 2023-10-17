class Carro { //classe PAI
    constructor(name, portas){
        this.nome = name
        this.portas = portas
        this.desligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.desligado = true
    }
    desligar = function(){
        this.desligar = false
    }
    setCor = function(color){
        this.cor = color
    }
}

class Militar extends Carro{ // classe filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blind = blindagem
        this.mun = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.mun>0){
            this.mun--
        }
    }
}

const c1 = new Carro("Normal", 4)

c1.ligar()
c1.setCor("Preto")

console.log(c1)
console.log(c1.cor)
console.log(c1.desligado?"Sim":"Não") // operador ternário
console.log("-------------------------------------------")

const c2 = new Militar("Tanque", 1, 100, 50)

console.log(c2)

