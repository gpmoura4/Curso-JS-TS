
var mux = 10;

function verificaDigit(sumCpfNums) {
    let digit = 11 - (sumCpfNums % 11);
    // console.log(digit);
    //Se o digito for maior que 9, retorna 0, senão, retorna o proprio digito
    return digit > 9 ? 0 : digit;
}

function sumDigits(cpfNums, mux) {

    let valueMux = mux;

    //Ajustando multiplicador para o segundo digito
    if (cpfNums.length === 10) valueMux += 1;

    return cpfNums.reduce((acumulador, value, index, arr) => {
        // console.log(`A conta é ${value} * ${valueMux}`);
        acumulador += (value * valueMux);
        // console.log(acumulador);
        valueMux--;
        return acumulador;
    }, 0); // Valor inicial do acumulador
}

function calculaCpf(cpfBruto) {

    //Formatando CPF
    const cpfLimpo = cpfBruto.replace(/\./g, '');
    //Separando em um vetor com cada digito/caractere
    const cpfArr = cpfLimpo.split('');
    // Cortando o CPF no traço dos ultimos dois digitos
    let cpfSliced = cpfArr.slice(0, cpfArr.length - 3);
    // Transformando em Number
    let cpfNums = cpfSliced.map((value) => {
        return Number(value);
    });

    //Fazendo o cálculo da soma + mux dos digitos
    let sumCpfNums = sumDigits(cpfNums, mux);
    // console.log(sumCpfNums);
    //Calculando o penultimo digito
    let penuDigit = verificaDigit(sumCpfNums);
    //Adicionando penultimo digito ao vetor de numeros do cpf
    cpfNums.push(penuDigit);

    //Fazendo o cálculo da soma + mux novamente com mais um digito
    sumCpfNums = sumDigits(cpfNums, mux);
    // console.log(`Soma depois do penultimo digit ser adicionado ${sumCpfNums}`);
    //Calculando o nultimo digito
    let lastDigit = verificaDigit(sumCpfNums);
    // console.log(`ultimo digito: ${lastDigit}`);
    //Adicionando penultimo digito ao vetor de numeros do cpf
    cpfNums.push(lastDigit);

    //Juntando o CPF num numero só para comparar
    const cpfFinal = cpfNums.join('');

    return cpfFinal
}

function formataCpf(cpfBruto) {
    // Tirando ponto e traço do CPF
    console.log(`CPF na função: ${cpfBruto}`);
    const cpfNoPeriod = cpfBruto.replace(/\./g, '');
    const cpfNoDash = cpfNoPeriod.replace(/-/g, '');
    return cpfNoDash
}

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function criaDiv() {
    const div = document.createElement('div');
    return div;
}

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


function mostraResultado(mensagem, isValid, divResults) {
    // const resultadoDiv = document.querySelector('.paragraph-results');

    const paragraph = criaParagrafo();
    divResults.innerHTML = '';

    if (!isValid) {
        paragraph.classList.add('error');
    }
    else {
        paragraph.classList.add('accept');
    }
    paragraph.innerHTML = mensagem;
    divResults.appendChild(paragraph);

}


class Person {

    constructor() {
        this._cpf = document.querySelector('.input-valida-cpf');
        this.validationBtn = document.querySelector('.btn-val');
        this.generatesBtn = document.querySelector('#btn-generates');
        this.regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        this.divValidationCpf = document.querySelector('.paragraph-results');
        this.divGeneratesCpf = document.querySelector('.para-generates-cpf');
        //colocar o "validates-cpf-div" aqui
    }

    limpaEntrada() {
        this._cpf.value = "";
    }

    formata(cpfBruto) {
        //Verificação de dados
        if (!this.regexCpf.test(cpfBruto)) {
            mostraResultado('Digite uma entrada válida!', false, this.divValidationCpf);
            this.limpaEntrada();
            return
        }
        const cpfFormatado = formataCpf(cpfBruto);
        const cpfFinal = calculaCpf(cpfBruto);
        //se o if der falso, deve ter um alerta de CPF inválido
        if (cpfFormatado != cpfFinal) {
            mostraResultado('CPF Inválido. Tente novamente.', false, this.divValidationCpf);
            return
        }
        mostraResultado('CPF Válido!', true, this.divValidationCpf);
        // this.limpaEntrada();
        return
    }


    start() {
        this.validationBtn.addEventListener('click', () => {
            this.formata(this._cpf.value);
        });
        this.generatesBtn.addEventListener('click', () => {
            const newCpf = geraCpfAleatorio();
            mostraResultado(newCpf, true, this.divGeneratesCpf);
        });

    }
}

const p1 = new Person();
p1.start();
// console.log(p1);
// guilherme.cpf = '000.853.487-08';

// : 10907926894








