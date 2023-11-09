
//import matriz livros e funl~ção menor vlaor
const livros =require("./listaLivros");
const menorValor=require('./menorvalor');



for (let atual = 0; atual < livros.length; atual++) {

    let menor = menorValor(livros,atual)

    let  livroAtual=livros[atual];

    console.log('livro atual', livros[atual]);

    let livrosMenorPreco=livros[atual];  

    console.log("livro menor  preço",livros[menor]);   

    livros[atual]=livrosMenorPreco;

    livros[menor]=livroAtual
}
//
//console.log(menorValor);
