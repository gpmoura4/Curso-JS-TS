// defineProperty e defineProperties

function Cafe(preco, tipo, tamanho, estoque) {
    this.preco = preco;
    this.tipo = tipo;
    this.tamanho = tamanho;
    /*Usamos uma variavel intermediaria em vez do this.estoque 
        pq pode causar um looping*/
    let privateEstoque = estoque;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //É enumeravel? da pra mostrar?
        configurable: true,// é configuravel? da pra apagar por exemplo?

        get: function () {
            return privateEstoque;
        },
        //Usa o valor referencial do get privateEstoque que veio de estoque
        set: function (estoque) {
            if (typeof estoque !== 'number') {
                throw new TypeError('Isso não é um número.');
            }
            privateEstoque = estoque;
        }
    }); 1




}

const cafe = new Cafe('R$10.00', 'expresso', 'grande', 500);
// console.log(cafe);
cafe.estoque = 'teste';
console.log(`O estoque é ${cafe.estoque}`);

