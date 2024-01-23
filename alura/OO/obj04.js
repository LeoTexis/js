//admin.js

import User from "./obj03.js";

export default class Admin extends User {
    constructor (name, email, nascimento, role = "adm", ativo = true) {
        super(name, email, nascimento, role, ativo)
    }

    
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin('Leonardo', 'l@l.com', '1994-11-07')


// console.log(novoAdmin)
// console.log(novoAdmin.criarCurso('JS', 20))