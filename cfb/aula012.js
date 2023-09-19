// operador Spread

// let n1 = [10, 20, 30]
// let n2 = [11, 22, 33, 44]
// let n3 = []
// let n4 = [n1,n2]

// console.log("n1 : " + n1)
// console.log(n2)
// console.log(n3)
// console.log("n4 : " + n4)

const player1 = {nome:"Leo", energia:100, vidas:3, magia:150}
const player2 = {nome:"Bruce", energia:100, vidas:5, velocidade:80}
const player3 = {...player1,...player2}

console.log(player3)

const soma=(v1, v2, v3) => {
    return v1+v2+v3
}

let valores = [1, 5, 4]
console.log(soma(...valores))

