// const ajax = obj => {

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         // true --> ASYNC | false --> SYNC
//         xhr.open(obj.method, obj.url, true);
//         //para enviar dados de um form por exemplo
//         xhr.send();

//         //Ação a ser tomada
//         xhr.addEventListener('load', (event) => {
//             /*xhr.status é o código HTTP correspondente, entre 200 a 300 indica 'sucess'*/
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 //Retorno do que foi solicitado (Dados e etc...)
//                 resolve(xhr.responseText);
//             } else {
//                 //retornando erro
//                 reject(xhr.statusText);
//             }
//         });
//     });

// };


document.addEventListener('click', event => {
    const element = event.target;
    const tagName = element.tagName.toLowerCase();
    if (tagName == 'a') {
        event.preventDefault();
        loadPage(element);
    }
});

async function loadPage(element) {
    //pegando link
    const link = element.getAttribute('href');
    try {

        const answer = await fetch(link);
        if (answer.status !== 200) throw new Error("errooooooooo");
        const html = await answer.text();
        loadResult(html);
    } catch (e) {
        console.log(e);
    }

    // fetch(link)
    //     .then(answer => {
    //         // erro quando o codigo HTTP da resposta for diferente de 200
    //         if (answer.status !== 200) throw new Error("errooooooooo");
    //         // conversao da resposta para o tipo de dado que queremos (HTML ou Texto)
    //         return answer.text();
    //     })
    //     .then(html => {
    //         loadResult(html);
    //     })
    //     .catch(error => { console.log(error) });

}


function loadResult(response) {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = response;
    // const p = document.createElement('p');
    // p.innerHTML = 'testando';
    // resultDiv.appendChild(p);

}

