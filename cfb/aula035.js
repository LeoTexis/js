const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const todosCurso = [...document.querySelectorAll(".curso")]

todosCurso.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",(el)=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})

