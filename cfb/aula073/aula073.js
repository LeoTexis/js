const stage = document.getElementById("stage")
const numObj = document.getElementById("numObjects")
const numQtdd = document.getElementById("numQtdd")
const btnAdd = document.getElementById("btnAdd")
const btnRemove = document.getElementById("btnRemove")

let widStage = stage.offsetWidth
let heiStage = stage.offsetHeight
let balls = []
let numBalls = 0

class Bola{
    constructor(arrayBolas,palco){
        this.size = Math.floor(Math.random()*10)+10 // ball size
        this.r = Math.floor((Math.random()*255))
        this.g = Math.floor((Math.random()*255))
        this.b = Math.floor((Math.random()*255))
        this.px=Math.floor(Math.random()*(widStage-this.size)) // spawn pos x
        this.py=Math.floor(Math.random()*(heiStage-this.size)) // spawn pos y
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*10) > 5 ? 1 : -1
        this.stage = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor(Math.random()*100000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar,10)
        this.eu = document.getElementById(this.id) //para associar obj no DOM
        numBalls++
        numObj.innerHTML = numBalls
    }
    posArr=()=>{ // position inside array balls
        return this.arrayBolas.indexOf(this)
    }

    remover=()=>{        
        clearInterval(this.controle) // stopped ball
        balls = balls.filter((b)=>{  //removed from array
            if(b.id != this.id) {
                return b
            }
        })
        this.eu.remove() // removed from DOM
        numBalls--
        numObj.innerHTML = numBalls
    }

    desenhar=()=>{
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "ball")
        div.setAttribute("style", 
        `Left:${this.px}px;
        top:${this.py}px;
        width:${this.size}px;
        height:${this.size}px;
        background-color:rgb(${this.r},${this.g},${this.b})`)
        this.stage.appendChild(div)
    }
    
    edgeControl=()=>{
        if(this.px+this.size >= widStage) {
            this.dirx = -1
        } else if(this.px <= 0){
            this.dirx = 1
        }
        if(this.py+this.size >= heiStage) {
            this.diry = -1
        } else if(this.px <= 0){
            this.diry = 1
        }
    }

    controlar=()=>{
        this.edgeControl()
        this.px += this.dirx * this.velx
        this.py += this.diry * this.vely
        this.eu.setAttribute("style", 
        `Left:${this.px}px;
        top:${this.py}px;
        width:${this.size}px;
        height:${this.size}px;
        background-color:rgb(${this.r},${this.g},${this.b})`)
        if((this.px > widStage) || (this.py > heiStage)){
            this.remover()
        }
    }
}



// alteração da largura conforme a tela
window.addEventListener("resize",(evt)=>{
    widStage = stage.offsetWidth
    heiStage = stage.offsetHeight
})

// adicinar as bolas instanciando bola
btnAdd.addEventListener("click",(evt)=>{
    const qtde = numQtdd.value
    for(let i=0; i<qtde; i++){
        balls.push(new Bola(balls,stage))
    }
})

// percorre o array e remove as bolas
btnRemove.addEventListener("click",(evt)=>{
    balls.map((b)=>{
        b.remover()
    })
})