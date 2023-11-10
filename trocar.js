//import matriz livros e funl~ção menor vlaor
//ordenar por aordem alfabetica
//import matriz livros e funl~ção menor vlaor
//const lista=require("./listaLivros");
//const menorValor=require('./menorvalor');

let itemAnalise = lista[atual];
let itemAnterior = lista[analise -1 ];
lista[analise ] = itemAnterior;
lista[analise -1] =itemAnalise;  


function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];
   
    lista[analise] = itemAnterior;
    lista[analise - 1] = itemAnalise;
   }
   
   
   
   module.exports = troca;



/*
function insertionSort(lista){
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        //enquanto   analise menor que item anterior  me> qe0 lista na posição analise menor que posição anterior
        
        while ( analise> 0 && lista[analise].preco < lista[analise -1].preco) {
         
   troca(lista,analise)
            //ordenar por listade preços
            analise--
        }
        console.log(lista);
    }
}

insertionSort(livros)*/