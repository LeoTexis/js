// prototype !

const Nave = function(energia){
     this.energia = energia
     this.municao = 100
}

const n1 = new Nave(100)

Nave.vida = 3

console.log(Nave)
console.log(n1)

console.log(n1.vida) //

Nave.prototype.vida = 3
console.log(Nave.vida) //
console.log(n1.vida) //

Nave.prototype.disparar = function(){
    if (this.municao > 0) {
        this.municao--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(n1.municao)

const n2 = Object.create(n1)

console.log(n2)
