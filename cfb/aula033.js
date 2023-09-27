//queryselector

const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("Curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = [document.getElementsByClassName("curso")[4]]

const queryDivTodas = document.querySelectorAll("div")

console.log(queryDivTodas)
// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosc2)
// console.log(cursoEspecial)

// cursosc2.map((el)=>{
//     el.classList.add("destaque")
// })