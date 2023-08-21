const pessoas = [
    { id: 3, nome: 'Paulinho' },
    { id: 2, nome: 'Joaozinho' },
    { id: 1, nome: 'Pedrinho' }
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    let chave = pessoa.id;
    novasPessoas.set(chave, { ...pessoa });
}
console.log(novasPessoas)

for (const pessoa of novasPessoas) {
    console.log(pessoa[1])
}
// chaves
for (const key of novasPessoas.keys()) {
    console.log(key)
}
// valores
for (const value of novasPessoas.values()) {
    console.log(value)
}