//import matriz livros e funl~ção menor vlaor
//ordenar por aordem alfabetica
//import matriz livros e funl~ção menor vlaor
const troca = require('./trocar');
//const menorValor=require('./menorvalor');

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
      let analise = atual;
      while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
        troca(lista, analise);
        analise--
      }
    }
    console.log(lista);
   }

   //insertionSort(livros)