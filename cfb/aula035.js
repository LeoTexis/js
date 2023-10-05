// referente a aula 35 à 37
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_transfer")
const todosCurso = [...document.querySelectorAll(".curso")]

todosCurso.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",(el)=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    const naoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    naoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})

