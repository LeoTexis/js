const clientes = require("./object.json")


function encontrar(lista, chave, valor) {
    return lista.find((item)=>item[chave].includes(valor))
}

// const encontradoNome = encontrar(clientes, "nome", "Kirby")
// console.log(encontradoNome)
const encontradoTel = encontrar(clientes, "telefone", "1918820860" )
console.log(encontradoTel)