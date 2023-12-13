const livros = require('./listaLivros')

function menorValor(arrList, posInic) {
    let maisBarato = posInic

    for (let atual = posInic; atual < arrList.length; atual++){
        if (arrList[atual].preco < arrList[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato
}

module.exports = menorValor