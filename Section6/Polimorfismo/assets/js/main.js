//Classe pai
class Account {
    constructor(agencia, conta, saldo) {
        this._agencia = agencia;
        this._conta = conta;
        this._saldo = saldo;
    }

    sacar(value) {
        if (this._saldo < value) {
            console.log('Saldo insuficiente!');
            this.verSaldo();
            return
        }
        if (value < 0 || typeof value !== 'number') {
            console.log('Valor inválido!');
            return
        }
        console.log(`Retirando o valor de R$${value}`);
        this._saldo -= value;
        this.verSaldo();
    }
    depositar(value) {
        console.log(`Depositando o valor de R$${value}`);
        this._saldo += value;
        this.verSaldo();
    }
    verSaldo() {
        console.log(`Seu saldo é ${this._saldo}`);
    }
}

const conta1 = new Account('1315', '04', 500);
// console.log(conta1);
// conta1.sacar(12);


class ContaCorrente extends Account {

    get limite() {
        return this._limite;
    }

    set limite(value) {
        this._limite = value;
    }



    // sacar(value) {
    //     if ((this._saldo + this._limite) < value) {
    //         console.log('Saldo insuficiente!');
    //         this.verSaldo();
    //         return
    //     }
    //     if (value < 0 || typeof value !== 'number') {
    //         console.log('Valor inválido!');
    //         return
    //     }
    //     console.log(`Retirando o valor de R$${value}`);
    //     this._saldo -= value;
    //     this.verSaldo();
    // }
}

const conta2 = new ContaCorrente('2120', '55', 100);
console.log(conta2);
conta2.limite = 400;
console.log(conta2);

