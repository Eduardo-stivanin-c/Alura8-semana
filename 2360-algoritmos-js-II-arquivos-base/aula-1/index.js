const { edGalho, edFolha } = require('./arrays.js')


function juntalistas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual=0;
    //loop enquanito mposição atual lista1  fim da matriz e mposição atual lista1  fim  
//quanod uma matriz acaba opprimeiro para e não exibe  resto daoutra
                                          //  E=and=&& é tudo and operador logico 
    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        console.log(`comparando ${produtoAtualLista1.titulo}  com ${produtoAtualLista2.titulo} `);
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
    //só dispara se sobrar endereço nuem uma da s listas for mis que ooutra
    //ordena só a lista 1 por preço 
    //ordena só a lista 1 por preço 
                //condição pea executar
    while (posicaoAtualLista1 <lista1.length) {
listaFinal[atual]=lista1[posicaoAtualLista1];
posicaoAtualLista1++;
atual++;
    }       //condição pea executar
    while (posicaoAtualLista1 <lista1.length) {
listaFinal[atual]=lista1[posicaoAtualLista1];
posicaoAtualLista1++;
atual++;
    }
    //ordena só a lista 2 por preço 
    while (posicaoAtualLista2 <lista2.length) {
        listaFinal[atual]=lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
 }

    return listaFinal
}

console.log(juntalistas(edGalho,edFolha));