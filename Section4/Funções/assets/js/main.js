function falaFrase(comeco) {
  return function falaResto(resto) {
    return (`${comeco} ${resto}`);
  }
}

//Aqui temos uma const que "virou" uma function
//ela recebe o falaFrase, porém, o falaFrase retorna uma outra function
//que é a falaResto, logo, o fala assume a funcionalidade de falaResto
const fala = falaFrase('olá');

/*
o resto ta recebendo a function "fala", que tem o comportamento do 
falaResto, que essa por sua vez, pega o começo da frase a partir
da falaFrase, juntando as duas palavras da frase
 */
const resto = fala('mundo!');
//printando resultado
console.log(resto);