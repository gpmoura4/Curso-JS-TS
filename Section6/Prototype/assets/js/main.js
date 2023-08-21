
function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    // this.personData = () => `ORIGINAL: Meu nome é ${this.name}, tenho ${this.age} e meço ${this.height}`;
}

// //Herança
Person.prototype.personData = function () {
    return `Meu nome é ${this.name}, tenho ${this.age} e meço ${this.height}`;
};

const p1 = new Person('Guilherme', 21, 1.74);
const p2 = new Person('Vovô Garoto', 91, 1.73);
const data = new Date();

console.dir(p1);
console.dir(data);


