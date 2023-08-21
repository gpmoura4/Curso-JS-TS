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
            resolve(msg);
            return
        }, time);
    });
}

/*
ASYNC E AWAIT --> A 'melhoria' do then e catch
*/

async function executes() {
    try {
        const frase1 = holdOn('Entrando no BD', rand(0, 1));
        console.log(frase1);

        setTimeout(() => {
            console.log("Promise pendente:", frase1);
        }, 1500);

        const frase2 = await holdOn('Buscando Dados', rand(0, 1));
        console.log(frase2);
        const frase3 = await holdOn('Dados encontrados!', rand(0, 1));
        console.log(frase3);
    } catch (e) {
        console.log(e);
    }
}

//pending -> pendente
//fullfilled -> resolvida
//rejected -> rejeitada

executes();