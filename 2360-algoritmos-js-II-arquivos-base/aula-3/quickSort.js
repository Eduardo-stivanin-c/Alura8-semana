//importa array.js
const listaLivros=require("./array");
const trocarLugar=require("./encontramenores");

function quickSort(array,esquerda,direita) {

    if (array.length >1) {

        let indiceAtual=particiona(array,esquerda,direita);

        if (esquerda <indiceAtual -1) {
       quickSort(array,esquerda,indiceAtual-1);


}

if (indiceAtual < direita) {
    quickSort(array,indiceAtual,direita);
}
    }

    return array;
}








function particiona(array,esquerda,direita) {
console.log("array",array);
console.log("esquerda e direita",esquerda,direita);
let pivo =array[Math.floor((esquerda+direita)/2)];
let atualEsquerda=esquerda;
let atualDireita=direita;

//para qunado a seta da esquerda p\ direita e a seta da direota pra esquerda 
 while (atualEsquerda <= atualDireita) {
    while (array[atualEsquerda].preco < pivo.preco) {
       atualEsquerda++;
    }
    while (array[atualDireita].preco > pivo.preco) {
        atualDireita--;
    }
    if (atualEsquerda <=atualDireita) {
    trocarLugar(array,atualEsquerda,atualDireita);
    atualEsquerda++;
    atualDireita--;
    } 

 return atualEsquerda;
 }

}

console.log(quickSort(listaLivros,0,listaLivros.length-1));