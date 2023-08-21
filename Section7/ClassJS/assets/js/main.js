//Symbol que gera um id aleatório toda vez que a var é referenciada
const _speed = Symbol();
class Car {
    constructor(name) {
        this._name = name;
        // this[_speed] = 0;
    }

    get speed() {
        // console.log('GETTER');
        return this[_speed];
    }

    set speed(value) {
        // console.log('SETTER');
        if (typeof value !== 'number') return;
        if (value > 100 || value < 0) return;
        this[_speed] = value;
    }
    //metodos
    acelerar() {
        if (this[_speed] >= 100) {
            console.log('Velocidade máxima!');
            return;
        }
        console.log('Acelerando!! Vrum Vrum');
        this[_speed]++;
    }
}

const fusca = new Car('Fusca');
fusca.speed = 18;
console.log(`A velocidade é: ${fusca.speed}`);
fusca.acelerar();
console.log(`A velocidade é: ${fusca.speed}`);