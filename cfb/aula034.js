// function msg(){
//     alert("Clicou tambem!")
// }
// const c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.add("destaque")
    })
})
// const msg1 =()=>{
//     alert("Clicou com arrow")
// }

// const c1 = document.getElementById("c1")



// c1.addEventListener("click", (evt)=>{
//     const el = evt.target
//     el.classList.add("destaque")
// })
