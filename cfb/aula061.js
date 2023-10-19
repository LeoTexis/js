// json to literal object and vice versa

const pessoa = {
    nome : "Leonardo",
    curso : "Javascript",
    aulas : {
        aula01 : "Introdução",
        aula02 : "Variáveis",
        aula03 : "Condicionais",
    }
}

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas)
// console.log(pessoa.aulas.aula01)
// console.log(pessoa.aulas["aula01"])

//convertendo em json

const stringToJson = JSON.stringify(pessoa) // transforma o objeto literal em ums string json

console.log(pessoa)
console.log(stringToJson)
console.log(typeof stringToJson)

const stringDoJson = `{"nome":"Leonardo","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicionais"}}`

const objetoJson = JSON.parse(stringToJson) // converte string json em objeto
console.log(objetoJson)
console.log(typeof objetoJson)