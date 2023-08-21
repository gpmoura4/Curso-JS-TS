// function escopo() {
//     const form = document.querySelector('.form');
//     const button = document.querySelector('#form-button');
//     const resultado = document.querySelector('.resultado');
//     const arrayObjts = [];

//     function eventoForm(evento) {
//         evento.preventDefault();

//         const nome = document.querySelector('.nome');
//         const sobrenome = document.querySelector('.sobrenome');
//         const peso = document.querySelector('.peso');
//         const idade = document.querySelector('.idade');

//         arrayObjts.push({
//             nome: nome.value,
//             sobrenome: sobrenome.value,
//             peso: peso.value,
//             idade: idade.value
//         });

//         resultado.innerHTML += (`<p>${nome.value} ${sobrenome.value} ${peso.value}
//         ${idade.value}</p>`);
//         console.log(arrayObjts);
//     }



//     form.addEventListener('submit', eventoForm);
// }

// escopo();

let dado = true;

if (typeof dado === 'number') {
    console.log('O dado é um número');
} else {
    console.log('O dado não é um número');
}

