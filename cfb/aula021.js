// funcoes e return

// function padrao1(){
//     console.log("teste 01")
// }

// padrao1()

// function padrao2(){
//     "teste 02"
// }

// padrao2()

// function padrao3(){
//     return "teste 03"
// }

// console.log(padrao3)

// // note a diferente do uso de return
// function padrao4(){
//     return "teste 04"
// }

// console.log(padrao4())

// let texto = padrao4()

// console.log(`Esse é o resultado de ${texto}`)

function parImpar() {
    let n1 = 10
    let n2 = 2
    let res = n1 + n2
    if(res%2 == 0) {
        return "PAR!"
    } else {
        return "IMPAR!"
    }
}
let res = parImpar()
console.log(`O numero é ${res}`)
