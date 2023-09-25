// funções anônimas

const f = function(v1,v2){
    return v1+v2
}

console.log(f(2,10))


const g = function(...valores) {
    let res = 0
    for (num of valores){
        res += num
    }
    return res
}

console.log(g(2,5,7))

// "construtor"
//é um método especial para criar e inicializar um objeto a partir de uma classe
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function
const a = new Function("num1","num2","return num1+num2")// função construtor anônima

console.log(a(10,5))



