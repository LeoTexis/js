// tentando de um jeito novo
const todosCursos = [...document.querySelectorAll(".curso")]
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const butaoAdd = document.querySelector("#btn_copiar")
const butaoRemove = document.querySelector("#btn_remover")

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

butaoAdd.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
        el.classList.toggle("selecionado")
    })
})

butaoRemove.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa1.appendChild(el)
        el.classList.toggle("selecionado")
    })
})


        
