const cliente = require("./object.json")

function filtrarApSemComplemento(lista){
    return lista.filter((cliente)=>{
        return (
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })
}

const filtrados = filtrarApSemComplemento(cliente)

console.log(filtrados)