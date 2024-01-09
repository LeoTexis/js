const user = {
    nome: "Leonardo",
    email: "ltl@mail.com",
    nascimento: "2024/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}   


const admin = {
    nome: "Iara",
    email: "iarapoly@mail.com",
    role: "adm",
    criarCurso() {
        console.log("curso criado!")
    }
}


Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()