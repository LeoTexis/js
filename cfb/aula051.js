// arrays !

let arr1 = ["javascript", "PHP", "Phyton"]

// console.log(arr1)
// console.log(arr1[2])

arr1[1] = "C#"
console.log(arr1)

// adicionando e removendo elementos

arr1.push("PHP")  // push adiciona automaticamente no final
arr1.push("C++")

console.log(arr1)

arr1.pop() // pop remove no final
arr1.pop() // pop remove no final
arr1.pop() // pop remove no final

console.log(arr1)

arr1.unshift("PHP") // adiciona no começo
arr1.unshift("C++") // adiciona no começo

console.log(arr1)

arr1.shift() // remove no começo
arr1.shift() // remove no começo

console.log(arr1)


let arr2 = ["claro", "padrão", "escuro"]
let arr3 = ["vermelho", "amarelo", "azul", arr2] // conceito de matriz é basicamente isso, um array dentro de outro

console.log(arr3[3][1])
console.log(`A cor escolhida foi ${arr3[0]} ${arr3[3][2]}`)