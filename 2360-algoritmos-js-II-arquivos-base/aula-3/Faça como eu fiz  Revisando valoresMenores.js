/*function divideNoPivo(array) {
 let pivo = array[Math.floor(array.length / 2)];
 encontraMenores(pivo, array);

 return array;
}*/


/*
function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;
   
    for(let analisando = 0; analisando < array.length; analisando++) {
      let atual = array[analisando];
    }
   
    return array;
   }
*/

   function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;
   
    for(let analisando = 0; analisando < array.length; analisando++) {
      let atual = array[analisando];
      if(atual.preco <= pivo.preco && atual !== pivo) {
        trocaLugar(array, analisando, valoresMenores)
        valoresMenores++
      }
    }
   
    return array;
   }