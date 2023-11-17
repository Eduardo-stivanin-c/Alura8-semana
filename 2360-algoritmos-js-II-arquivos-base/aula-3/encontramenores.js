const listaLivros = require('./array');


function encontrarmenores(pivo, array) {
  let menores=0;

//buscando valores < que o Pivo
  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco <pivo.preco) {
        menores++;


    }
   
    trocarLugar(array,array.indexOf(pivo),menores);
    return array;

} 
//

//Só Deus Todo-poderoso causa primeira de todas coisas sabe

}

function trocarLugar(array,de,para) {
    const elem1=array[de];
    const elem2=array[para];
    array[para]=elem1;
    array[de]=elem2;

}
//pivo livro de jAva que custa 30 R$


function dividenoPivo(array) {

  let pivo=array[Math.floor(array.length/2)];
console.log(pivo);
  encontrarmenores(pivo,array);

  let valoresMenores=0;

for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    // pra não comparaqr atual com pivo
    if (atual.preco<= pivo.preco && atual !== pivo) {
      trocarLugar(array,analisando,valoresMenores) ;
    valoresMenores++;
    
  } 
   
  return array;
  }
}
//console.log(dividenoPivo(listaLivros));
//console.log(   encontrarmenores(listaLivros[2]  ,  listaLivros)   )
module.exports=trocarLugar;