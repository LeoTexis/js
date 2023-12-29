import fs from 'fs';
import chalk from "chalk";


function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'Não há links no arquivo'
}


function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, "Não há arquivo no diretorio"))
}

// async/await

async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch(erro) {
        trataErro(erro)
    }
}
        

// promises com then()

// function pegarArquivo(caminhoDoArquivo) {
//     const enconding = 'utf-8'
//     fs.promises.readFile(caminhoDoArquivo, enconding)
//         .then((texto)=>console.log(chalk.green(texto)))
//         .catch(trataErro)

// }

// function pegarArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
//         if (erro) {
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }


export default pegarArquivo;