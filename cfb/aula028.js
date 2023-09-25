// MAP
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// const cursos = ['HTML', 'CSS', 'Jabascript', 'PHP', 'React']

//1° param : elemento da coleção
//2° param : indice do elemento/posição
//3° param :  
             
// cursos.map((el,i)=>{
//     console.log(`Curso : ${el} - posição do curso : ${i}`)
// })
//--------------------------------
// let c = cursos.map((el,i)=>{
//     return el
// })

// console.log(c)


//--------------------------------
// const num = [2,5,6,33]

// const map = num.map((x)=> x*2)
// console.log(map)
// console.log(num)
//--------------------------------

// let teste = document.getElementsByTagName("div")
// teste = [...teste]
// teste.map((e,i)=>{
//     console.log(e)
//     console.log(e.innerHTML)
// })
// console.log(teste)

//--------------------------------

// const elem = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(elem,({innerHTML})=>innerHTML)
// console.log(val)

//---------------------------------

const num =['1', '2', '3', '4', '5']

const converter = (e) => parseInt(e)
const dobrar = (e) => e*2
let num1 =num.map(converter)
let num2 = num.map(dobrar)
console.log(num1)
console.log(num2)
