//this

//     this.nome = nome // ao inves de criar outra variavel, usamos o this para dar referencia ao um elemento da função nome "como se fosse um variavel"
console.log(this)
console.log(typeof this)


function aluno(nome,nota){
    this.nome = nome
    this.nota = nota 
    // console.log(nome)
    // console.log(nota)

    this.dados_anonimos = function(){
        setTimeout(function(){
            // this.nome = "x"
            // this.nota = 5 // isso resolve mas com as arrow function resolve isso
            console.log(this.nome)
            console.log(this.nota)
        },1000)
    }
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const aluno1 = new aluno("Leo", 10)
aluno1.dados_anonimos() // undefined e undefined pq? pq o setTimeout cria uma nova instancia do this e "sombreia" os outros this
aluno1.dados_arrow()

