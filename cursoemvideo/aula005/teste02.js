let valores = [5,7,1,3]
valores.sort()
for(let pos in valores) {
    console.log(`A posição do valor ${valores[pos]} é ${pos}`)
}

let pos = valores.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`A posição do valor é ${pos}`)
}