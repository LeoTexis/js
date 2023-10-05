// tudo sobre relações dos elementos DOM
// aulas referentes 38, 39

//aula 38 ----

const caixa1 = document.querySelector(".caixa")
const btn_c = [...document.querySelectorAll(".curso")]

// console.log(caixa1.children[caixa1.children.length-1])
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)
// console.log(btn_c[0].getRootNode())
// console.log(btn_c[0].ownerDocument)

//aula 39 ----

// Para verificar se o elemento possui filhos temos :

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
console.log(btn_c[0].children)

console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")

console.log(caixa1.firstElementChild.innerHTML="TESTE")
