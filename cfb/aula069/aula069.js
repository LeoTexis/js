// promise

const numero = document.querySelector("#numero")



let promessa = new Promise((resAccepted, resReject)=>{
    let result=true // alterar para ver resultados das promisses
    let time = 3000
    setTimeout(()=>{
        if(result){resAccepted("Deu tudo certo!")
        } else {
            resReject("Deu tudo errado!")
        }
    },time)
})

promessa.then((retorno)=>{
    numero.innerHTML = retorno
})

promessa.catch((retorno)=>{
    numero.innerHTML = retorno
})

numero.innerHTML = "processando...."