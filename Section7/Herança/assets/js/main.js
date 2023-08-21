// //Symbol que gera um id aleatório toda vez que a var é referenciada
// const _speed = Symbol();

// class Veiculo {
//     constructor(name, roda) {
//         this._name = name;
//         this._roda = roda;
//         // this[_speed] = 0;
//     }

//     get speed() {
//         // console.log('GETTER');
//         return this[_speed];
//     }

//     set speed(value) {
//         // console.log('SETTER');
//         if (typeof value !== 'number') return;
//         if (value > 100 || value < 0) return;
//         this[_speed] = value;
//     }
//     //metodos
//     acelerar() {
//         if (this[_speed] >= 100) {
//             console.log('Velocidade máxima!');
//             return;
//         }
//         console.log('Acelerando!! Vrum Vrum');
//         this[_speed]++;
//     }
// }

// class Car extends Veiculo {
//     constructor(nome, roda, cor) {
//         // herdando o construtor do pai com o super
//         super(nome, roda);
//         this.cor = cor;
//     }
// }

// const c1 = new Car('Fiat Uno', 'roda grande', 'preto');
// console.log(c1);
// c1.acelerar();

function geraCpfAleatorio() {
    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const getRandomCPFNumbers = () => {
        let cpfNumbers = [];
        for (let i = 0; i < 9; i++) {
            cpfNumbers.push(generateRandomNumber(0, 9));
        }
        return cpfNumbers;
    };

    const calculateDigit = (cpfNumbers) => {
        const digit = cpfNumbers.reduce((acc, number, index) => {
            return acc + number * (cpfNumbers.length + 1 - index);
        }, 0);
        return (digit % 11 < 2) ? 0 : 11 - (digit % 11);
    };

    const cpfNumbers = getRandomCPFNumbers();
    cpfNumbers.push(calculateDigit(cpfNumbers));
    cpfNumbers.push(calculateDigit(cpfNumbers));

    var formattedCPF = [];

    cpfNumbers.forEach((number, index) => {
        formattedCPF.push(number);
        if (index === 2 || index === 5) formattedCPF.push('.');
        if (index == 8) formattedCPF.push('-');
    })

    stringCpf = formattedCPF.join('');

    return stringCpf
}

const randomCPF = geraCpfAleatorio();
console.log(randomCPF);
