// getElementByTagName
const dc1=document.getElementById("c1")
const dc2=document.getElementById("c2")
const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")

const arrElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

console.log(arrElementos)


// const colecaoHTML = document.getElementsByTagName("div")

// console.log(colecaoHTML)

//o retorno do ById é um array. Já o TagName retorna um HTMLcollection
// olhando o console do site podemos ver que ById podemos usar maior quantidade de metodos que o HTMLcollectio, porem podemos converter o HTMLcollection em array

/* colecaoHTML.map((e)=>{
    console.log(e)
}) */

// como podemos ver n podemos operar o map() em HTMLcollection

let colecaoHTML = [...document.getElementsByName("div")]

console.log(colecaoHTML)