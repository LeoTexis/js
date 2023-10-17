const Pessoa = {
    nome:"", // precisa de , para seprar elementos
    idade:"",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(name){
        this.nome = name
    },
    setIdade:function(age){
        this.idade = age
    }
}

// console.log(Pessoa.nome)

// const p2 = Pessoa
// const p3 = Pessoa

// p3.nome = "Iara" // notação ponto
// p2["nome"] = "Nalu" // notação colchetes

// Pessoa.setNome("Bruno")

// console.log(Pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome)

Pessoa.nome = "Leonardo"
Pessoa.idade = 18
console.log(`Olá, ${Pessoa.nome}. Você tem ${Pessoa.idade} anos`)