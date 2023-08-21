const arr1 = ['isabella', 'evelyn'];
const arr2 = ['guilherme', 'moura'];
const arr3 = arr1.concat(arr2, '5 filhos', 'e mt amor');
// console.log(arr3);

const arr4 = [...arr1, ...arr2, ...[1, 2, 3]];
console.log(arr4);
