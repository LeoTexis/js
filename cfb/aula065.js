// conceito ABSTRACT

class CarroPadrao {
    constructor(){
        if(this.constructor === CarroPadrao){
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        this.rodas = 4
        this.portas = 2
        this.ligado = false
    }
}

class Carro extends CarroPadrao {
    constructor (tipo, estagTurbo) {
        super()
        this.turbo = new Turbo(estagTurbo)
        if(tipo == 1) {
            this.velMax = 120
            this.nome = "Normal"
        } else if (tipo == 2){
            this.velMax = 160
            this.nome = "Esportivo"
        } else if (tipo == 3){
            this.velMax = 200
            this.nome = "Sônico"
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log("Nome : " +this.nome)
        console.log("Vel.Max : " +this.velMax)
        console.log("Qtdd turbo : "+this.turbo)
        console.log("Qtdd rodas : "+this.rodas)
        console.log("Qtdd portas : "+this.portas)
        console.log("Ligado ? " +(this.ligado ? "Sim" : "Não"))
        console.log("---------------")
    }
}

class Turbo {
    constructor(e){
        if (e==0){
            this.pot = 0
        } else if(e==1){
            this.pot = 50
        } else if (e==2){
            this.pot = 75
        } else if (e==3){
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagTurbo){
        super(4, estagTurbo)
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro Especial"
    }
    info(){
        
    }
}


const c1 = new Carro(1,0)
const c2 = new Carro(1,1)
const c3 = new CarroEspecial(3)
const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()
