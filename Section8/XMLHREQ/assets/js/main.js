const ajax = obj => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // true --> ASYNC | false --> SYNC
        xhr.open(obj.method, obj.url, true);
        //para enviar dados de um form por exemplo
        xhr.send();

        //Ação a ser tomada
        xhr.addEventListener('load', (event) => {
            /*xhr.status é o código HTTP correspondente, entre 200 a 300 indica 'sucess'*/
            if (xhr.status >= 200 && xhr.status < 300) {
                //Retorno do que foi solicitado (Dados e etc...)
                resolve(xhr.responseText);
            } else {
                //retornando erro
                reject(xhr.statusText);
            }
        });
    });

};


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
    // chamando ajax para pegar os dados
    const configAjax = {
        method: 'GET',
        url: link,
    }

    // ajax(configAjax)
    //     .then(response => {
    //         loadResult(response);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    try {
        const response = await ajax(configAjax);
        loadResult(response);
    } catch (e) {
        console.log(e);
    }
}

function loadResult(response) {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = response;
    // const p = document.createElement('p');
    // p.innerHTML = 'testando';
    // resultDiv.appendChild(p);

}


const link = element.getAttribute('href');
const answer = await fetch(link);
if (answer.status !== 200) throw new Error("errooooooooo")
const html = await answer.text();
loadResult(html);
