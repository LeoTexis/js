//coleção set

// a diferença fundamental dessa coleção para as outras é que a coleção set NÃO permite a entrada duplicada de elmentos

// podemos ja podemos adicionar elementos no próprio construtor.
let musicas = new Set(["musica1", "musica boa", "musica10", "musica ruim"])

musicas.add("musica hardcore")
musicas.add("musica 1")
musicas.add("musica 1")
musicas.add("musica 10") // como podemos ver, não permite entrada duplicadas

console.log(musicas)

musicas.forEach((el)=>{
    console.log(`Um dos itens de musicas é o ${el}`)
})

musicas.delete("musica ruim")

musicas.forEach((el)=>{
    console.log(`Apos a remoção os itens de musicas são : ${el}`)
})

