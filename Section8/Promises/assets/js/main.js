function rand(min, max) {
    min *= min * 1000;
    max *= max * 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function holdOn(msg, time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject("Não é uma frase!");
                return
            }
            //reject para identificar erros
            //O resolve é executado quando o tempo estabelecido passado
            resolve(msg + " was in promise");
            return
        }, time);
    });
}


//THEN --> é chamado pelo resolve
// holdOn('Conectando com o BD', rand(1, 3))
//     //função a ser executada pelo then
//     .then((msg) => {
//         /* 'msg' é recebida a partir do resolve */
//         console.log(msg);
//         /* Chamando uma nova promise após a 1° executar */
//         return holdOn('Buscando dados', rand(1, 3));
//     })
//     .then((msg) => {
//         console.log(msg);
//         return holdOn('Filtrando dados', rand(1, 3));
//     })
//     .then((msg) => {
//         console.log(msg);
//         //SIMULANDO ERRO COM TIPO DIFERENTE
//         return holdOn(44444444, rand(1, 3));
//     })
//     .then((msg) => {
//         console.log(msg);
//         return holdOn('Dados encontrados!', rand(1, 3));
//     })
//     .then((msg) => {
//         return msg + " \nvocê é gay...";
//     })
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log("Erro: " + err);
//     })

// const promisesArr = [
//     holdOn('COISAS 1', 5000),
//     holdOn('COISAS 2', 5000),
//     holdOn('COISAS 3', 5000),
//     holdOn('COISAS 4', 5000),
// ];

/*
//EXECUTA TODAS AS PROMISES
Promise.all(promisesArr)
    .then(value => {
        console.log(value, "\n\n");
    })
    .catch(err => {
        console.log(err, "\n\n");
    });
 */

//ENTREGA A PRIMEIRA PROMISE PRONTA
// Promise.race(promisesArr)
//     .then(value => {
//         console.log(value, "\n\n");
//     })
//     .catch(err => {
//         console.log(err, "\n\n");
//     });


function resolvePromiseExample() {
    const isTrue = false;
    if (isTrue) {
        return Promise.resolve('Está tudo certo.');
    } else {
        return holdOn('Pronto, agora está tudo certo.', 3000);
    }
}

resolvePromiseExample()
    .then(value => {
        console.log(value);
    })
    .catch(e => {
        console.log(e);
    });