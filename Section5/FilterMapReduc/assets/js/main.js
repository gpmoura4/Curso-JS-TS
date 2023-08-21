//Filter, map e reduce

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//  FILTER
//Retornando os números maiores que 4
const numsEx = [5, 2, 4, 2, 7, 65, 2, 67, 1, 2, 8, 9, 1, 2, 0];

const FiltredNums = numsEx.filter((value) => value > 4);

// console.log(FiltredNums);

const pessoas = [
    { name: 'Naruto', age: 15 },//0
    { name: 'Sasuke', age: 15 },
    { name: 'Sakura', age: 14 },
    { name: 'Rock Lee', age: 16 },
    { name: 'Kakashi', age: 32 },
    { name: 'Guy', age: 34 },
    { name: 'Neji', age: 34 },
];

//Determinando nomes com menos de 5 letras
const pessoas1 = pessoas.filter((value) => {
    value.name.length < 5
});

// console.log(pessoas1);

//Determinando pessoas com menos de 20 anos
const pessoas2 = pessoas.filter(value => value.age < 20);
// console.log(pessoas2);

// Determinando os nomes que terminam com 'a'
const pessoas3 = pessoas.filter(value => value.name.toLowerCase().endsWith('a'));
// console.log(pessoas3);

//  MAP
// retornando os nomes das pessoas pra um novo array
const pessoas4 = pessoas.map((object, index, array) => object.name);

//Alternativa
// retornando os nomes das pessoas pra um novo array
// const idades = pessoas.map((object) => {
//     delete object.name;
//     return object;
// });

// console.log(pessoas4);


const idades2 = pessoas.map((object) => ({ age: object.age }));
// console.log(idades2);

// console.log(pessoas);

// retornando os nomes das pessoas pra um novo array
// Problema gerado: o object original está sendo alterado
const arrIds1 = pessoas.map((object) => {
    object.id = randomNum(0, 100);
    return object;
});
// console.log(arrIds1);
// console.log(pessoas);

//Retornando um novo objeto igual ao original, mas com uma chave 'id' agora
const arrIds = pessoas.map((object) => {
    const newObj = { ...object };
    newObj.id = randomNum(0, 100);
    return newObj;
});
// console.log(arrIds);



//REDUCE
const nums = [5, 2, 4, 2, 7, 65, 2, 67, 1, 2, 8, 9, 1, 2, 0];

//Somando todos os números pares
const total = nums.reduce((acumulador, value, index, array) => {
    if (value % 2 === 0) acumulador += value;
    return acumulador;
}, 0); //valor inicial do acumulador
// console.log(total);

// Retornando a pessoa mais velha 
const olderPerson = pessoas.reduce((acum, object, index, array) => {
    if (acum.age > object.age) return acum;
    return object;
}); // Não 
// setamos nenhum valor incial para o acumluador,
// então ele assume o valor do index 0 e o object o valor do index 1 
// console.log(olderPerson);


//FILTER+MAP+REDUCE -> Retornando a soma do dobro de todos os pares
// const nums = [5, 33, 43, 22, 7, 65, 2, 67, 11, 25, 81, 9, 12, 24, 70];

const pares = nums.filter(value => value % 2 === 0).map(value => value * 2).reduce((acum, value) => acum + value);
;
// console.log(pares);



const vetor = [13, 5, 6, 87, 9, 0, 89, 2]

const number = vetor.reduce((acum, value, index, arr) => {
    acum++;
    console.log(`valor do acumulador: ${acum}`);
    return acum;
}, 0);











