function createsPerson(name, lName, weight, height, mensage) {
  return {
    name,
    lName,
    mensage,

    get fullName() {
      return (`Nome completo: ${this.name} ${this.lName}`);
    },

    set fullName(value) {
      valueSplited = value.split(' ');
      this.name = valueSplited.shift();
      this.lName = valueSplited.join(' ');
    },

    get fala() {
      //This é usado para pegar o escopo de quem chamou a função, ou seja, p1
      return (`${this.name} está falando sobre ${this.mensage}`);
    },

    weight,
    height,
    //Getter 
    get imc() {
      const imc = this.weight / (Math.pow(this.height, 2));
      return imc.toFixed(2);
    }
  };
}

const p1 = createsPerson('bruno', 'everton', 50, 1.60, 'Guilherme');
p1.fullName = 'Isabella Evelyn Oliveira' //setando valor para o nome completo
console.log(p1.fullName);
console.log(p1.weight);
console.log(p1.height);
console.log(p1.fala);
console.log(p1.imc);
