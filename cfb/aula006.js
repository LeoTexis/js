var num1 = 12, num2 = 15, num3= 10
function maior() {
    if (num1 > num2 && num1 > num3) {
        console.log(`O maior numero é o ${num1}`)
    } else if (num2 > num1 && num2 > num3) {
        console.log (`O maior numero é o ${num2}`)
    } else 
    console.log (`O maior numero é o ${num3}`)
}

maior()

function ganhoPorHora(salario, horas) {
    
    var salarioHora = salario / horas

    return salarioHora.toFixed(2)
}
console.log(ganhoPorHora(1000, 42))
Number(ganhoPorHora)
console.log(typeof(salarioHora))

