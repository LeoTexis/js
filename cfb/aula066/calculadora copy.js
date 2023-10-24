const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const limpar = document.querySelector("#tLimpar")

let sinal = false
let dec = false

// console.log(limpar)
// console.log(teclasNum)
// console.log(teclasOp)

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        if(evt.target.innerHTML == "."){
            if(!dec){
                dec = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0."
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
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

limpar.addEventListener("click",(evt)=>{
    sinal = false
    dec = false
    display.innerHTML = "0"
})

// teclaRes.addEventListener("click",(evt)=>{
//     result = 0
// })