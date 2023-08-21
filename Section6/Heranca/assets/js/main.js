//Produto - nome, preco, quantidade, aumento(), desconto();
// teclado = cor, modelo | Caneca = material 

function Product(name, price, quantity) {
    this.name = name;
    this.formatPrice(price);
    // this.price = price;
    this.quantity = quantity;
}

Product.prototype.formatPrice = function (price) {
    this.price = `R$${price}`;
}

Product.prototype.increase = function (amount) {
    //o valor ta tentando ser utilizado a partir de uma string: 'R$valor'
    //Tirando o R$ do price
    let formatedPrice = this.price.split('R$');
    //Passando ele pra o tipo number
    let priceNumber = Number(formatedPrice[1]);
    //Fazendo a operação de porcentagem
    priceNumber += (priceNumber * amount / 100);
    //Formatando com R$ denovo
    this.formatPrice(priceNumber);
}

Product.prototype.decrease = function (amount) {
    //o valor ta tentando ser utilizado a partir de uma string: 'R$valor'
    //Tirando o R$ do price
    let formatedPrice = this.price.split('R$');
    //Passando ele pra o tipo number
    let priceNumber = Number(formatedPrice[1]);
    //Fazendo a operação de porcentagem
    priceNumber -= (priceNumber * amount / 100);
    //Formatando com R$ denovo
    this.formatPrice(priceNumber);
}

function Teclado(name, price, quantity, color) {
    Product.call(this, name, price, quantity);
    this.color = color;
}
Teclado.prototype = Object.create(Product.prototype);
Teclado.prototype.constructor = Teclado;

/* 
A função increase do Teclado é lida primeiro na 
cadeia de métodos do prototype, então, o aumento será 
absoluto e não mais percentual, já que o percentual 
é o método do prototype pai do Teclado, que seria o Product
*/

//Criando um aumento de preço absoluto
Teclado.prototype.increase = function (amount) {
    this.price += amount;
}

const teclado1 = new Teclado('Blackwidow', 300, 1000, 'Preta');
// teclado1.increase(100);
// console.log(teclado1);

const teclado2 = new Teclado('Cyclosa', 250, 700, 'Azul');
// console.log(`Preço antes do aumento: ${teclado2.price}`);
teclado2.increase(100);
// console.log(`Aumentando o preço em R$100`);

// const produto1 = new Product('Produto1', 1000, 100);
// console.log(produto1);
// console.log(teclado2);


function Caneca(name, price, quantity, material, capacity, stock) {
    Product.call(this, name, price, quantity);
    this.material = material;
    this.capacity = capacity;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        //Get é sempre chamado quando acessamos a propriedade --> 'stock'
        get: function () {
            return stock;
        },
        /*Set é sempre chamado quando atribuimos um novo valor para
        a propriedade, no caso, passamos o valor 5 lá quando instanciamos o objt*/
        set: function (value) {
            if (typeof value !== 'number') return;
            stock = value;
        }
    });

}

Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('Caneca Stormtrooper',
    20.00, 500, 'Porcelana', '300ml', 100);
console.log(caneca1);
// console.log(`Dando um desconto de 50% na ${caneca1.name}`);
caneca1.decrease(50);
// console.log(`A ${caneca1.name} agora custa R$${caneca1.price}`);

/*Tentando modificar o estoque para uma string
que é impedido pelo if do set */
caneca1.stock = 'uma string';
console.log(caneca1);

// const produto2 = new Product('Produto2', 10, 2000);
// console.log(produto2);
// produto2.increase(100);
// console.log(produto2);
