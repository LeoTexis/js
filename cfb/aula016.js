// forin e forof
// Aprendendo primeiro

const objs = document.getElementsByTagName("div")
let a = [10,20,30,40]

// // for (let i = 0; i < a.length; i++) {
// //     console.log(a[i])
// // }

// for (n in a) {
//     console.log(n) //por padrão o n tem a posição dos elementos
// }


// for (n of a) {
//     console.log(n)
// }

for (o of objs) {
    console.log(o.innerHTML = "Cursos")
}

for (o in objs) {
    // console.log(objs[o].innerHTML)
    console.log(o)
}