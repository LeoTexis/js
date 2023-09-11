//INICIO
function contar (){
    var ini = window.document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var step = document.getElementById('step')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || step.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando ...<br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(step.value)
        if (p <=0) {
            alert('passo invalido. Considerando passo 1')
            p = 1
        }

        if (i < f) {    
            //contagem crescente
            for (var c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            //contagem descrescente
            for (var c = i ; c >= f ; c -= p)
                res.innerHTML += `${c} `
        }
    }
}