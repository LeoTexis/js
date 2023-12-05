const livros = require('./listaLivros')

function menorValor(arrLivros, posInicial){
    let maisBarato = posInicial

    for (let atual = posInicial; atual < arrLivros.length; atual++) {
        if (arrLivros[atual].preco < arrLivros[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato
}




