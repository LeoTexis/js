//docente.js

import User from "./obj03.js";

export default class Docente extends User {
    constructor (name, email, nascimento, role = "docente", ativo = true){
        super(name, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no cursao de ${curso}.`
    }
}

// const novoDocente = new Docente ('Iara', 'i@i.com', '2024-01-01')

// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Nalu', 'JS'))
