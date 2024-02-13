import mongoose from "mongoose"
import Errobase from "../erros/erroBase.js"
import ReqIncorreta from "../erros/reqIncorreta.js"
import ErroValidacao from "../erros/erroValidacao.js"
import NaoEncontrado from "../erros/naoEncontrado.js"

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  // console.error(erro)
  if (erro instanceof mongoose.Error.CastError) {
    new ReqIncorreta().enviarResposta(res)
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res)
  } else if (erro instanceof NaoEncontrado){
    erro.enviarResposta(res)
  } else {
    new Errobase().enviarResposta(res)
  }
}


export default manipuladorDeErros