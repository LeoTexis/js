const user = {
    nome: "Leonardo",
    email: "ltl@mail.com",
    nascimento: "2024/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome)
    }
}

// user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()

const exibir = function() {
    console.log(this.nome, this.email)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()
