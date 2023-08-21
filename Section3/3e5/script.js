const entrada = Math.floor(Math.random() * (100 - 0) + 1);



const result = (entrada) => {
    if (!(Number.isFinite(entrada))) return 'Não é um número';//Verifica se é um numero
    if (entrada % 3 === 0 && entrada % 5 === 0) return 'FizzBuzz';
    if (entrada % 3 === 0) return 'Fizz';
    if (entrada % 5 === 0) return 'Buzz';
    return entrada;
};


console.log(result(entrada));
