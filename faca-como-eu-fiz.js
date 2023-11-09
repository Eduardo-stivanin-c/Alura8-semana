//                     0 1
//const  precosLivros=[25,15,30,50,45,20];
//let atual=0;
let maiscaro=0;
//import matriz livros
const livros =require("./listaLivros")

for (let atual = 0; atual < livros.length; atual++) {
    //busca livro ordena do mais  barato pr mais caro
    if (livros[atual].preco > livros[maiscaro].preco) {
       maiscaro=atual 
    } 
    /*else {
        
    }*/
    
    
}
console.log( `O livro mais carro custa ${livros[maiscaro].preco}  e o título é ${livros[maiscaro].titulo} ` ); 