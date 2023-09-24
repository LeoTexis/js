//declarações CONTINUE e BREAK

let n=0
let max=1000

// while(n<max) {
//     console.log(`O numero computado é ${n}`)
//     if(n>10){
//         break
//     }
//     n++
// }

// console.log("fim!")
let qtddpares = 0

for(let i=n; i<max; i++) {
    // console.log(`Número computado : ${i}`)
    if(i%2 != 0){
        continue
    }
    qtddpares++
}
console.log(`A quantidade de pares é ${qtddpares}`)
console.log(`Fim do programa!`)