const {editoraUm, editoraDois} = require('./livros')


function juntaLista(lista1, lista2) {
    let listaFinal = []
    let posAtualLista1 = 0
    let posAtualLista2 = 0
    let posAtualFinal = 0

    while(posAtualLista1 < lista1.length && posAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posAtualLista1]
        let produtoAtualLista2 = lista2[posAtualLista2]

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[posAtualFinal] = produtoAtualLista1
            posAtualLista1++
        } else {
            listaFinal[posAtualFinal] = produtoAtualLista2
            posAtualLista2++
        }
        posAtualFinal++
    }

    while (posAtualLista1 < lista1.length) {
        listaFinal[posAtualFinal] = lista1[posAtualLista1]
        posAtualLista1++
        posAtualFinal++
    }
    
    while (posAtualLista2 < lista2.length) {
        listaFinal[posAtualFinal] = lista2[posAtualLista2]
        posAtualLista2++
        posAtualFinal++
    }

    return listaFinal
}

console.log(juntaLista(editoraUm,editoraDois))