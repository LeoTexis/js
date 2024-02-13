import Errobase from "./erroBase.js"

class ReqIncorreta extends Errobase{
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mensagem, 400)
  }
}


export default ReqIncorreta