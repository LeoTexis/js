// objetos literais

const computador1 = {
    nome: "pc1",
    cpu: "i5",
    ram: "64gb",
    hd:"2tb",
}
const computador2 = {
    nome: "pc2",
    cpu: "i7",
    ram: "64gb",
    hd:"2tb",
}
const computador3 = {
    nome: "pc3",
    cpu: "i9",
    ram: "64gb",
    hd:"2tb",
}

var estoque = []
estoque.push(computador1)
estoque.push(computador2)
estoque.push(computador3)
// console.log(estoque)

estoque.forEach((e)=>{
    console.log(e.nome)
})

estoque.forEach((e)=>{
    e.monitor = "22'"
})

console.log(estoque)
console.log(computador1.cpu) // podemos mostrar uma propriedade por notação ponto ...
console.log(computador1["cpu"]) //...ou notação de colchetes