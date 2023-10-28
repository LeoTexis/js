// promise porem em funtion

const numero = document.querySelector("#numero")
const btn = document.querySelector("#btnPromessa")


btn.addEventListener("click",()=>{
    promessas()
    numero.innerHTML = "processando...."
})

const promessas = () => {
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
    
    .then((retorno)=>{ //como estamos pegando dentro da proxima função promessa, podemos ocultar o promessa e ter apenas o then e o catch
        numero.innerHTML = retorno
    })
    
    .catch((retorno)=>{
        numero.innerHTML = retorno
    })
    
}

numero.innerHTML = "Esperando."