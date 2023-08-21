fetch('pessoas.json')
    .then(answer => answer.json())
    .then(json => loadJsonData(json));


function loadJsonData(json) {
    const table = document.createElement('table');
    for (let obj of json) {
        const tr = document.createElement('tr');
        for (let key in obj) {
            let td = document.createElement('td');
            td.innerHTML = obj[key];
            tr.appendChild(td);
            // console.log(key, obj[key]);
        }
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

