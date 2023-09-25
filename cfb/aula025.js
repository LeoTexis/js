//arrow functions
//nome técnico = funções lambidas
// resumo : são mecanismos conciso para representar funções anonimas

// //anteriormente usamos assim
// const soma = function(v1,v2) {
//     return v1+v2
// }

// console.log(soma(1,2))


const soma1 =(num1,num2) => {return num1+num2}

console.log(soma1(10,5))

//se a função tiver apenas um parametro ela não precisa do parentes
const a = n => {return n}
console.log(a("Leo"))

//com arrow function n precisamos de return e quando n precisamos do return n precisamos de chaves

const add = n => n+10

console.log(add(10))