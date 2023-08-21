class ControleRemoto {
    constructor(name) {
        this._name = name;
        this._volume = 0;
    }
    //métodos instancias
    aumentarVol() {
        this._volume += 5;
    }
    diminuirVol() {
        this._volume -= 5;
    }
    /*Métodos Statics -> são atribuidos a classe em si
    e nao a instancia */
    static soma(x, y) { console.log(x + y) };
}

const controle1 = new ControleRemoto('Samsung');
ControleRemoto.soma(5, 2);