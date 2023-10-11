// COLEÇÃO map

let mapa = new Map()

// console.log(typeof(mapa))

// mapa.set(key,value)

mapa.set("curso", "Javascript")
mapa.set(10, "Leonardo")
mapa.set(1, 100)
mapa.set("canal", 100)

console.log(mapa)
console.log(mapa.size)

if(mapa.has("canal")){
    console.log("A chave existe")
} else {
    console.log("A chave NÃO existe!")
}

console.log(mapa.get(1))