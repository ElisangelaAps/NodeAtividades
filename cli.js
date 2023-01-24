import chalk from "chalk";
import pegaArquivo from "./app.js";
import validaURL from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhodoArquivo){
    const resultado = await pegaArquivo(caminhodoArquivo[2]);

    if (caminho[3] === "validar"){
    console.log(chalk.yellow("Lista de Validados"),await validaURL(resultado));
    }else{
    console.log(chalk.yellow("Lista de links"),resultado);
    }
    
}

processaTexto(caminho)