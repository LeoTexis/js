// funções geradoras
// elas são basicamente uma função que tem o seu retorno adiado ate o momento da necessidade do return
// são o pilar da programação assincrona em js. Elas

function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc1 = cores()
// console.log(itc.next())
// console.log(itc.next())
// console.log(itc.next())
// console.log(itc.next())
console.log(itc1.next().value)
console.log(itc1.next().value)
console.log(itc1.next().value)
console.log(itc1.next().value)

function* perguntas() {
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual o seu esporte favorito ?'
    const escola = yield 'Qual sua materia favorita ?'
    return `Seu nome é ${nome}. Seu esporte favorito é ${esporte} e sua materia favorita é ${escola}`
}

const itc2 = perguntas()
console.log(itc2.next().value)
console.log(itc2.next('Leonardo').value)
console.log(itc2.next('futebol americano').value)
console.log(itc2.next('matemática').value)

function* contador() {
    let i=0
    while(true){
        yield i++
    }
}

const itc3 = contador()
console.log(itc3.next().value)
console.log(itc3.next().value)

for(let i=0; i<=5;i++){
    console.log(itc3.next().value)
}




