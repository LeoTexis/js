// membros static e mais POO

class Npc {
    static alert = false
    constructor(energia) {
        this.energy = energia
    }
    info = function(){
        console.log(`Energia : ${this.energy}`)
        console.log(`Alerta : ${(Npc.alert ? "Sim" : "Não")}`)
        console.log("--------------------")
    }
    static alertar = function(){
        Npc.alert = true
    }
}

const npc1 = new Npc (100)
const npc2 = new Npc (60)
const npc3 = new Npc (20)

// console.log(npc1.energy)
// console.log(npc2.energy)
// console.log(npc3.energy)

// Npc.alertar()

npc1.info()
npc2.info()
npc3.info()