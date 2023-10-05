// filter

// const filtroMaior18 = (valor) => {
//     if (valor >= 18)
//         return valor
// }

const idade = [-1, 0, 7, 10, 12, 18, 23, 44, 62]

const maior = idade.filter((val)=>{
    if (val >= 18) 
        return val
})

const menor = idade.filter((val)=>{
    if (val < 18) 
        return val
})

console.log(idade)
console.log(maior)
console.log(menor)
