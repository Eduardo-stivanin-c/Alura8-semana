
//import matriz livros e funl~ção menor vlaor
const livros =require("./listaLivros");
const menorValor=require('./menorvalor');



for (let atual = 0; atual < livros.length -1; atual++) {

    let menor = menorValor(livros,atual)

    let  livroAtual=livros[atual];

    console.log('livro atual', livros[atual]);

    let livrosMenorPreco=livros[atual];  

    console.log("livro menor  preço",livros[menor]);   

    livros[atual]=livrosMenorPreco;

    livros[menor]=livroAtual;
}
//
//console.log(menorValor);

//abaixo é o  Faça como eu fiz da Alura
//Faça como eu fiz: Usando loops do JavaScript 
livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)