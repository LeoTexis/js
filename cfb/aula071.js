const data = new Date


console.log(data.getDate())
console.log(data.getDay())
console.log(data.getFullYear())
console.log(data.getHours())
console.log(data.getMonth())
console.log(data.toDateString())

const dataResume = `${data.getDate()} / ${data.getMonth()} / ${data.getFullYear()}`

console.log(dataResume) // aqui ainda precisa ser tratada, pois de o dia ou mes ter apenas um digito, ele n coloca o 0 no mes. Usar op.ternaria

let mes = data.getMonth()

mes = mes < 10 ? "0"+mes : mes

console.log(mes)


// getDate() = dia do mês
// getDay() = dia da semana (Numero)
// getFullYear() = ano com 4 digitos
// getHours() = horas
// getMiliseconds() = milisegundos
// getMinutes() = minutos
// getMonth() = mes 
// getSeconds() = segundos
// getTime() = Timestamp
// getTimezoneOffset() = timezone da localidade
// setDate() = define um dia do mes para data
// setMonth() = define um mes do mes para data
// setFullYear() = define um ano do mes para data
// setHours() = define uma hora do mes para data
// setMinutes() = define um minuto do mes para data
// setSeconds() = define um segundo do mes para data
// setMillieconds() =define um milisegundo do mes para data
// toDateString()