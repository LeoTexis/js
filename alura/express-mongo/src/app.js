import Express from "express"
import conectaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"
// import mongoose from "mongoose"
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js"
import manipulador404 from "./middlewares/manipulador404.js"


const conexao = await conectaDatabase()

conexao.on("error",(erro)=>{
  console.error("Erro de conexão", erro)
})

conexao.once("open", ()=>{
  console.log("Conexão com o banco realizada com sucesso")
})

const app = Express()
routes(app)

app.use(manipulador404)

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros)

export default app