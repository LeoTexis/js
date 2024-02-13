import livro from "../models/Livro.js"
// import { autor } from "../models/Autor.js"

class LivroController {
  static async listarLivros (req, res, next) {
    try {
      const livrosResultado = await livro.find()
        .populate("autor")
        .exec()
  
      res.status(200).json(livrosResultado)
    } catch (erro) {
      next(erro)
    }
  }
    
  static async listarLivroPorId (req, res, next) {
    try {
      const id = req.params.id
  
      const livroResultados = await livro.findById(id)
        .populate("autor", "nome")
        .exec()
  
      res.status(200).send(livroResultados)
    } catch (erro) {
      next(erro)
    }
  }
    
  static async atualizarLivro (req, res, next) {
    try {
      const id = req.params.id
  
      await livro.findByIdAndUpdate(id, {$set: req.body})
  
      res.status(200).send({message: "Livro atualizado com sucesso"})
    } catch (erro) {
      next(erro)
    }
  }
    
  static async cadastrarLivro (req, res, next) {
    try {
      let livroNovo = new livro(req.body)
  
      const livroResultado = await livroNovo.save()
  
      res.status(201).send(livroResultado.toJSON())
    } catch (erro) {
      next(erro)
    }
  }

  static async deletarLivro (req, res, next) {
    try {
      const id = req.params.id
  
      await livro.findByIdAndDelete(id)
  
      res.status(200).send({message: "Livro removido com sucesso"})
    } catch (erro) {
      next(erro)
    }
  }

  static async listarLivrosPorEditora (req, res, next) {
    try {
      const editora = req.query.editora
  
      const livrosResultado = await livro.find({"editora": editora})
  
      res.status(200).send(livrosResultado)
    } catch (erro) {
      next(erro)
    }
  }
}

export default LivroController