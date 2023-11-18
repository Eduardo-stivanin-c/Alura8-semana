//busca

const listaLivros=require('./arrayOrdenado')
//de valor ordenadel ista já ordenada
function busca(array,de,ate,valorBuscado) {
    console.log('de,ate ',de,ate    );

 // se preço pesquisado não estiver na lista  retorne -1
/*if (de > ate) {
    return -1
}*/

//####################################################


    const meio=Math.floor((de +ate)/2);
const atual=array[meio];
if (valorBuscado===atual.preco) {
    return meio;
}
//se valorBuscado < atual.preço
if (valorBuscado <atual.preco) {
   return busca(array,de,meio -1,valorBuscado);
    
}
if (valorBuscado>atual.preco) {
    return busca(array,meio +1,ate ,valorBuscado)
}


}//se passar preço  não tiver um livro vocm aqule preço nãda aerro emve\z de retoornar indice
//console.log(busca(listaLivros,0,listaLivros.length-1,60));

//erro de stack overfllow caundo trav a pro llop infiito

//tem erro mesmo no roiginal
//console.log(busca(listaLivros, 0, listaLivros.length - 1, 36));
//console.log(busca(listaLivros, 0, listaLivros.length - 1, 1));

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));