var num1 = 2, num2 = 5, num3 = 10

console.log(num1 == num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1*num2 >= num3)
console.log(num1 != num2)
console.log(num1 !== num2)
console.log(num1 <= num2)

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} else {
    console.log(`${num2} é maior que ${num1}`)
}

var c = null
function maior() {
    if (num1 > num2) {
        c = num1
    } else {
        c = num2 
    } if (c > num3) {
        c = c 
    } else {
        c = num3
    }
}
maior ()

console.log(`O maior numero entre os três é o ${c}`)


