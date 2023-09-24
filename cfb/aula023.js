// Parametro rest

//anteriormente...

// function soma1 (n1=0, n2=0) {
//     return n1+n2
// }

// console.log(soma1(5,2))
// Trabalhamos com um número limitado de argumentos, oq eu sera resolvido com o rest

function soma(...valores){
    let res = 0
    for (const v of valores){
        res += v
    }
    return res
}

console.log(soma(1,2,5,10))