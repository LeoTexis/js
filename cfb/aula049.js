// metodo some

const arr = [10, 21, 25, 19, 20, 18, 18, 22]

const evt = el => el % 2 === 0

console.log(arr.some(evt))

console.log(arr.some((el, i)=>
    el % 2 === 0
))

// quando 1 elemento esta conforme