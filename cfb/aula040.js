// aula 40 e 41

// aula 40 ------- adicionando e removendo elementos e atributos 

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_c2")
const todosCursos= ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "React Native"]

todosCursos.map((el, chave)=>{
    const novoElement = document.createElement("div")
    caixa1.appendChild(novoElement)
    novoElement.setAttribute("id","c" + Number(chave + 1))
    novoElement.setAttribute("class","curso")
    novoElement.innerHTML = el
    novoElement.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target)
    })
})



