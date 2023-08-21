//                0       1         2        3       4
const nomes = ['eren', 'mikasa', 'armin', 'erwin', 'levi'];

let novoNomes = nomes.slice(0, -1);
// console.log(novoNomes)


//SPLIT E JOIN
const nome = 'Justin Crânios Flakes';
// console.log(nome);
const nomeSplited = nome.split(' ');
// console.log(nomeSplited);
const nomeJoined = nomeSplited.join(' ');
// console.log(nomeJoined);

//SPLICE -> nomes.splice(index atual, elemtn deletado, elem1, elem2, ...)
//                 -4        -3        -2           -1
//                  0         1         2            3
const yonkous = ['kaidou', 'big mom', 'shanks', 'barba branca'];


let removidos = yonkous.splice(-1, 1, 'barba negra');
console.log(removidos, yonkous);

removidos.push(yonkous.splice(0, 1, 'luffy'));
console.log(removidos, yonkous);

removidos.push(yonkous.splice(1, 1, 'buggy'));
console.log(removidos, yonkous);