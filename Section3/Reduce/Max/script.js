var arr = [1, 2, 3];
var max = arr.reduce(function (accum, currentV) {
    return Math.max(a, currentV);
}, -Infinity);


const array1 = [1, 2, 3, 4];

const initialValue = 0;
const bigger = array1.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue),
    initialValue
);

console.log(bigger);

/*
Esse código em JavaScript cria um array arr com os valores 1, 2 e 3. Em seguida, ele usa a função reduce() para encontrar o valor máximo do array.

A função de callback passada para reduce() compara dois valores a e b e retorna o maior deles usando a função Math.max(). O primeiro argumento da função Math.max() é o valor atual acumulado, a, e o segundo argumento é o próximo valor do array, b.

Aqui está o passo a passo da execução do código:

O valor inicial do acumulador é definido como -Infinity, que é um valor menor do que qualquer outro valor numérico.
Na primeira iteração, a função de callback é chamada com a = -Infinity e b = 1. A função Math.max() retorna 1, que se torna o novo valor acumulado.
Na segunda iteração, a função de callback é chamada com a = 1 e b = 2. A função Math.max() retorna 2, que se torna o novo valor acumulado.
Na terceira iteração, a função de callback é chamada com a = 2 e b = 3. A função Math.max() retorna 3, que se torna o novo valor acumulado.
Depois de percorrer todo o array, a função reduce() retorna o valor máximo encontrado, que é 3.
No final, a variável max contém o valor 3, que é o valor máximo do array arr.*/