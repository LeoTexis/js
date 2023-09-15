function gerar () {
    var num = document.getElementById('nb') 
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        var n = Number(num.value)
        c = 1
        res.innerHTML = ``
    }

    while (c <= 10 ){
        res.innerHTML += `${c} x <strong>${n}</strong> = ${c*n} <br>`
        c++
    }
}