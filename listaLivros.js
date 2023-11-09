//                     0 1
const  precosLivros=[{titulo:"Javascript",
preco:25
},{titulo:"PHP",
    
     preco:15},{titulo:"Java",preco:30},{titulo:"Elixir", preco:50},{titulo:"Go" , preco:45},{titulo:"Python" , preco:20}];

let atual=0;
let maisbarato=0;
//exporta pra outro arquivonvo de Javascript

module.exports = precosLivros;


/*
for (let atual = 0; atual < precosLivros.length; atual++) {
    //busca livro ordena do mais  barato pr mais caro
    if (precosLivros[atual] < precosLivros[maisbarato]) {
       maisbarato=atual 
    } 
    /*else {
        
    }
    
    
}*/

//console.log( `O livro mais barato custa ${precosLivros[maisbarato]} ` ); 