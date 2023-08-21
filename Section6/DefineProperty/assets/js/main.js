// defineProperty e defineProperties

function Cafe(preco, tipo, tamanho, estoque) {
    this.preco = preco;
    this.tipo = tipo;
    this.tamanho = tamanho;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //É enumeravel? da pra mostrar?
        value: estoque, //valor
        writable: true, //é modificavel?
        configurable: true,// é configuravel? da pra apagar por exemplo?
    });

    Object.defineProperties(this, {
        preco: {
            enumerable: true, //É enumeravel? da pra mostrar?
            value: preco, //valor
            writable: true, //é modificavel?
            configurable: true,// é configuravel? da pra apagar por exemplo?
        },
        tipo: {
            enumerable: true, //É enumeravel? da pra mostrar?
            value: tipo, //valor
            writable: true, //é modificavel?
            configurable: true,// é configuravel? da pra apagar por exemplo?
        },
    });


}

const cafe = new Cafe('R$10.00', 'expresso', 'grande', 500);
cafe.estoque = 300;
console.log(cafe);
for (key in cafe) {
    console.log(key);
}

