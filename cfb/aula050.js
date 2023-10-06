// o que são iteradores ???
//
// quais coleções são iteráveis :
// arrays, string, map, sets entre outros.

const valores = [10, 8, 9, 2]

console.log(valores)

const itValores = valores[Symbol.iterator]()

console.log(itValores.next()) // false ñ chegou no final
console.log(itValores.next()) // false ñ chegou no final
console.log(itValores.next()) // false ñ chegou no final
console.log(itValores.next()) // false ñ chegou no final
console.log(itValores.next()) // true chegou no final

// é assim que os iteradores funcionam nas funções e metodos ate o final do array, sabendo quando é o final