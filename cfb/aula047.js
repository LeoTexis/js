const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array =[10, 5, 6, 2, 9, 20, 44]
p_array.innerHTML = elementos_array

btnPesquisar.addEventListener("click", (evt)=>{
    const ret = elementos_array.find((e, i)=>{
        if (e == txt_pesquisar.value){
            resultado.innerHTML = `O valor encontrado é : ${e}. Sua posição no array é : ${i+1}`
            return e
        }
    })
    console.log(ret)
})