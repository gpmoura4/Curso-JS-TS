/*
Object.values
Object.entries
Object.assign(des,any)
object.getOwnPropertyDescriptor(o,'prop')
...spread
*/

const teacher = { name: 'Filipe Brida', height: 1.87 };
const student = { name: 'Guilherme Moura', height: 1.74 };

const teacher2 = { ...teacher, idade: 93 };
teacher2.name = 'Ricardo Correa'
teacher2.height = 1.73

// console.log(teacher);
// console.log(teacher2);

//Mesma coisa que spread
const teacher3 = Object.assign({}, teacher);
// console.log(teacher3);

//Keys do objeto
// console.log(Object.keys(teacher3));

//Values do objeto 
// console.log(Object.values(teacher3));

//Values e keys do objeto 
// console.log(Object.entries(teacher3));

/*Desestruturação pegando o valor do teacher 3 
que são arrays e colocando nos indices de outro array*/
// for (let [key, value] of Object.entries(teacher3)) {
//     console.log(key, value);
// }

//Vendo qual o status das propriedades de uma chave do objeto
console.log(Object.getOwnPropertyDescriptor(teacher3, 'name'));

