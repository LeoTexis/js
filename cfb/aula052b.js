const btnSomar =document.querySelector("#btnSoma")
const btnSubtrair = document.querySelector("#btnSubtracao")
const btnMultiplicar = document.querySelector("#btnMultiplicacao")
const btnDividir = document.querySelector("#btnDivisao")
const res = document.querySelector("#ires")


const op = [
    ()=>{
        const val = [document.querySelector("#ivalor1").value, document.querySelector("#ivalor2").value]
        res.value = Number(val[0]) + Number(val[1])
    }
    ,
    ()=>{
        const val = [document.querySelector("#ivalor1").value, document.querySelector("#ivalor2").value]
        res.value = Number(val[0]) - Number(val[1])
   
    }
    ,
    ()=>{
        const val = [document.querySelector("#ivalor1").value, document.querySelector("#ivalor2").value]
        res.value = Number(val[0]) / Number(val[1])
    }
    ,
    ()=>{
        const val = [document.querySelector("#ivalor1").value, document.querySelector("#ivalor2").value]
        res.value = Number(val[0]) * Number(val[1])
    }
]

// metodo proprio

// btnSomar.addEventListener("click", op[0])
// btnSubtrair.addEventListener("click", op[1])
// btnDividir.addEventListener("click", op[2])
// btnMultiplicar.addEventListener("click", op[3])

// 'use strict' 
// const inputSpaces = [...document.getElementsByTagName('input')]
// const buttons = [...document.getElementsByTagName('button')]
// const divResult= document.getElementById('result')

// const operations = [(a,b)=>a+b, (a,b)=>a-b, (a,b)=>a*b, (a,b)=>a/b ]

// buttons.map((element)=>element.addEventListener('click', event=>{
//     const index = buttons.findIndex(el=> el == event.target)
//     const num1 = Number(inputSpaces[0].value)
//     const num2 = Number(inputSpaces[1].value)
    
//     divResult.innerText = 'Resultado: ' + operations[index](num1,num2)
// }))