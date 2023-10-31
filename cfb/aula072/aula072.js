// exercicio da aula071 DATA

const data = document.getElementById("data")
const divRelogio = document.getElementById("relogio")
const btnAtivar = document.getElementById("btnAtivar")
const btnParar = document.getElementById("btnParar")
const tmpAlarme = document.getElementById("tmpAlarme")
const horaAlarme = document.getElementById("horaAlarme")
const timer = document.getElementById("timer")

let somAlarme = new Audio("alarm_clock_old.mp3") 
//podemos usar promise, pois há um atraso na execução. Para tocar em tempo de execução seria necessário o assync await poremos vamos apenas tocar e parar

somAlarme.loop=-1 //-1 informa que sera infinito o loop o restante é a qtt de vezes que repetirar

let tsAtual = null //timestamp atual
let tsAlarme = null
let alarmeAtivado = false
let alarmeTocando = false

btnAtivar.addEventListener("click",()=>{
    tsAtual = Date.now()
    tsAlarme = tsAtual+(tmpAlarme.value*1000)
    alarmeAtivado = true
    const dtAlarme = new Date(tsAlarme)
    horaAlarme.innerHTML = `Hora do alarme : ${dtAlarme.getHours()}:${dtAlarme.getMinutes()}:${dtAlarme.getSeconds()}`
})
btnParar.addEventListener("click",()=>{
    alarmeAtivado = false
    alarmeTocando = false
    horaAlarme.innerHTML = "Hora do alarme :"
    tmpAlarme.value = 0
    timer.classList.remove("alarme")
    somAlarme.pause()
    somAlarme.currentTime = 0
})

const date = new Date()

let dia = date.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = date.getMonth()
mes = mes < 10 ? "0" + mes : mes

const dateResume = `${dia}/${mes}/${date.getFullYear()}`

data.innerHTML=dateResume

const relogio = ()=>{
    const date=new Date()
    let hora = date.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minuto = date.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto
    let segundo = date.getSeconds()
    segundo = segundo < 10 ? "0" + segundo : segundo
    const horaCompleta = `${hora}:${minuto}:${segundo}`
    divRelogio.innerHTML = horaCompleta
    if(alarmeAtivado && !alarmeTocando) {
        if(date.getTime() >= tsAlarme){
            alarmeTocando = true
            somAlarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio,1000)