const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array =[10, 5, 6, 2, 9, 20, 44]
p_array.innerHTML = elementos_array

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML = "Array não conforme"
    const ret = elementos_array.every((el,i)=>{
        if(el < 18) {
            resultado.innerHTML = `Array não conforme na posição ${i +1}`
        }
        return el >= 18
    })
    console.log(ret) 
})

//se um dos elementos não estiver conforme ja é retornado false