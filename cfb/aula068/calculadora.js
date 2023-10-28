const num = [...document.querySelectorAll(".num")]
const op = [...document.querySelectorAll(".op")]
const limpar = document.querySelector("#tLimpar")
const display = document.querySelector(".display")
const igual = document.querySelector("#tIgual")
const copiar = document.querySelector("#tCopy")
const aba = document.querySelector("#calcAba")
const calc = document.querySelector("#calc")

let ponto = false
let sinal = false


num.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(evt.target.innerHTML == "."){
            if(!ponto){
                ponto = true
                if(display.innerHTML == "0") {
                    display.innerHTML = "0."
                } else {
                    display.innerHTML += "."
                }
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

op.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if (!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            } else {
            display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

limpar.addEventListener("click",()=>{
    display.innerHTML = "0"
    sinal = false
    ponto = false
})

igual.addEventListener("click",()=>{
    sinal = false
    ponto = false
   const res = eval(display.innerHTML)
   display.innerHTML = res
})


copiar.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})

calc.addEventListener("click",()=>{
    calc.classList.toggle("calcEx")
})