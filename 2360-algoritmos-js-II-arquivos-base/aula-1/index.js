const { edGalho, edFolha } = require('./arrays.js')


function juntalistas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual=0;
    //loop enquanito mposição atual lista1  fim da matriz e mposição atual lista1  fim  

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        console.log(`comparando ${produtoAtualLista1.titulo}`);
        //gerando lista por preço do mais basarato ´prp o mais caro
        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {

            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        atual++;
    }
    return listaFinal
}

console.log(juntalistas(edGalho,edFolha));