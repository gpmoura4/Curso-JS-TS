// Renomeando nome pra não dar conflito
import { pe1, nome as nomeExportado } from './module1.js';
import soma2 from './module1.js';

console.log(pe1);
console.log(soma2(10, 10));
console.log(nomeExportado);

console.log("TESTE");