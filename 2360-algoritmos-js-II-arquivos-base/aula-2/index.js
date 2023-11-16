const listaLivros = require('./array');
//loop se para(for) e sem while (enquanto)
//nuivel anilhamneto é se a primeira ou seguda ,ec vez rodoando
function mergeSort(array,nivelAninhamento=0) {
console.log(`Nível de aninhamento:${nivelAninhamento}`);    
    //array traduzindo matriz
    //matriz diferente de Matrix
    if (array.length > 1) {
        //arredonda pra baixo na hoa de qubra em dpois pedçao assim um pode ficar mior que o outro opedaçõ
        const meio = Math.floor(array.length / 2)
        //o bug tpa na linha 10
        //contador de niel de aninhamneto pra contar quandotsa vezes es´ta rodaon essea função no loop
        const parte1 = mergeSort(array.slice(0, meio),nivelAninhamento+ 1);
   
        const parte2 = mergeSort(array.slice(meio, array.length),nivelAninhamento+ 1);
   
        array = ordena(parte1, parte2);
        
        //   console.log(meio);
    }
    return array;
}//problema de copiar e colar da aula anterior,é argumento s parte1 ,parte2
function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    
    let posicaoAtualParte2 = 0;
   
    const resultado = [];
    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            //poe  no final da matriz fdde resultados se produto parte 1 mai s baraot que produto parte 2
        
            resultado.push(produtoAtualParte1)
        
            posicaoAtualParte1++;
        
        }


        else {
            resultado.push(produtoAtualParte2)
        
            posicaoAtualParte2++;
        }
      //  console.log(resultado);
        //condição pra concaterna               
    }//return fique fora dos llops porque ele retorna e para afunçção                                                                      //falotu coisa no senao else 
        return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))
        
        
}
console.log(mergeSort(listaLivros));

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Not_defined?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default