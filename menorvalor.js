//                     0 1
//const  precosLivros=[25,15,30,50,45,20];
//let atual=0;
 //import matriz livros
 
 const livros =require("./listaLivros");
 console.log(livros);
function  menorValor(arrProdutos,posicaoInicial) {
    //nquando comelçça o primeiro itme nã osebe ese mais baratio ou caro 
    let maisbarato=posicaoInicial;



for (let atual = 0; atual < arrProdutos.length; atual++) {
    //busca livro ordena do mais  barato pr mais caro
    if (arrProdutos[atual].preco < arrProdutos[maisbarato].preco) {
       maisbarato=atual;
    } 
    return maisbarato;
}  
}



//exporta pra poutro arquvio Jqavascrpt

module.export=menorValor;
//console.log( `O livro mais barato custa ${livros[maisbarato].preco}  e o título é ${livros[maisbarato].titulo} ` ); 
