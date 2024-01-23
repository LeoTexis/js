//trabalhando com classes
//'sintax sugar', uma camadinha de abstração

export default class User {
    #name
    #email
    #birthday
    #role
    #ativo
    constructor (name, email, nascimento, role, ativo = true) {
        this.#name = name
        this.#email = email
        this.#birthday = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    get nome() {
        return this.#name
    }

    get email() {
        return this.#email
    }
    
    get nascimento() {
        return this.#birthday
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    exibirInfos() {
        return `${objUser.nome}, ${objUser.email}, ${objUser.birthday}, ${objUser.role}, ${objUser.ativo}`
    }
}

// const novoUser = new User ("Leonardo", "L@L.com", "1994-11-07")
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser))
