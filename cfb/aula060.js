const f_tipoMilitar = document.querySelector("#fTipoMilitar")
const f_tipoNormal = document.querySelector("#fTipoNormal")
const f_blindagem = document.querySelector("#fBlindagem")
const f_municao = document.querySelector("#fMunicao")
const carros = document.querySelector("#carros")
const btnAddCarro = document.querySelector("#btnAddCarro")

const f_nome = document.querySelector("#fNome")
const f_portas = document.querySelector("#fPortas")


let veiculos = []
const removerCarro = (quem) =>{
    veiculos = veiculos.filter((el)=>{
        return el.nome != quem
    })
}

f_tipoMilitar.addEventListener("click",(evt)=>{
    // console.log("teste")
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_blindagem.value=0
    f_municao.setAttribute("disabled","disabled")
    f_municao.value=0
    // console.log("teste")
})

const gerenciarExibicao =()=>{
    carros.innerHTML = ""
    veiculos.forEach((c)=>{
        const div = document.createElement("div")
        const btnRemover = document.createElement("button")
        btnRemover.innerHTML = "Remover!"
        btnRemover.addEventListener("click",(evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            console.log(veiculos)
            gerenciarExibicao()
        })
        div.setAttribute("class","carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML = `Nome : ${c.nome} <br>`
        div.innerHTML += `Portas : ${c.portas} <br>` 
        div.innerHTML += `Blindagem : ${c.blind} <br>` 
        div.innerHTML += `Munição : ${c.mun} <br>` 
        div.innerHTML += `Cor : ${c.cor} <br>` 
        carros.appendChild(div)
        div.appendChild(btnRemover)
    })
}

btnAddCarro.addEventListener("click",()=>{

    if (f_tipoNormal.checked){
        const c = new Carro(f_nome.value,f_portas.value)
        veiculos.push(c)
    } else {
        const c = new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
        veiculos.push(c)
    }
    f_nome.value = ""
    f_portas.value = 0
    gerenciarExibicao()
})

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

