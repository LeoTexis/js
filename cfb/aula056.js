// objetos!!! Começo de POO

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects

// qual a diferença de new e um objeto literal

// a gente cria uma classe que é a base, tudo que vai contemplar naquele objeto, desde de metodos e propriedade. Depois basta instancias objetos dessa classe. Cada objeto vai seguir tudo que foi construido na classe porem cada objeto é INDEPENDENTE dos outros objetos dessa classe!

//forma tradicional

class Pessoa {
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new Pessoa("Leo") //essa chave faz referencia a chave do construtor
let p2 = new Pessoa("Iara") 
let p3 = new Pessoa("Bruno") 

// toda vez que utilizamos o operador new estamos isntanciando um nome objeto da classe (no caso pessoa) entao ele vai la na memoria e reserva um espaço do tipo pessoa com o nome da variavel (caixa com nome p1 do tipo pessoa). No construtor declaramos uma variavel chamada nome e atribuimos o valor bruno com this.nome (com this ele cria a propriedade nome e atribui o valor pessoa)
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)