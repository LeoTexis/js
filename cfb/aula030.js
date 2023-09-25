// getelementById
// pega apenas os elementos com o determinado id
// -------------------- 

// const dc1=document.getElementById("c1")

// console.log(dc1) //o elemento
// console.log(dc1.id) // o id do elmento
// console.log(dc1.innerHTML) // e o conteudo do elemento

// dc1.innerHTML="Mudou!"

// -------------------------

const dc1=document.getElementById("c1")
const dc2=document.getElementById("c2")
const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")

const arrElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

console.log(arrElementos)

// for (d of arrElementos)
//     d.innerHTML = "Leonardo Leite"

// console.log(arrElementos)

arrElementos.map((e) =>{
    e.innerHTML="Leonardo (y)"
    console.log(e)
})