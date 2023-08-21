function resultImc(peso, altura) {
  const imc = peso / (Math.pow(altura, 2));
  return imc.toFixed(2);
}

function criaParagrafo() {
  const p = document.createElement('p');
  return p;
}


function mostraResultado(mensagem, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const paragraph = criaParagrafo();
  if (isValid) {
    paragraph.classList.add('paragrafo-resultado');
  }
  else {
    paragraph.classList.add('bad');
  }
  paragraph.innerHTML = mensagem;
  resultado.appendChild(paragraph);
}

function mostraImc(imc, estagio, validador) {
  mostraResultado(`Seu IMC é ${imc}, ${estagio}`, validador);
}

function estagioImc(imc) {
  const estagioPeso = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade 1'
    , 'Obesidade 2', 'Obesidade 3'];

  if (imc >= 39.9) {
    return estagioPeso[estagioPeso.length - 1];
  }
  if (imc >= 34.8) {
    return estagioPeso[estagioPeso.length - 2];
  }
  if (imc >= 29.9) {
    return estagioPeso[estagioPeso.length - 3];
  }
  if (imc >= 24.9) {
    return estagioPeso[estagioPeso.length - 4];
  }
  if (imc >= 18.5) {
    return estagioPeso[estagioPeso.length - 5];
  }
  if (imc < 18.5) {
    return estagioPeso[estagioPeso.length - 6];
  }
}


function escopo() {

  const form = document.querySelector('.form');
  const resultado = document.querySelector('#resultado');

  function eventoForm(evento) {
    evento.preventDefault();
    const peso = evento.target.querySelector('.peso');
    const altura = evento.target.querySelector('.altura');
    const valorPeso = Number(peso.value);
    const valorAltura = Number(altura.value);

    if (!valorPeso || !valorAltura) {
      mostraResultado(`Dados inválidos.`, false);
      return;
    }
    const imc = resultImc(valorPeso, valorAltura);
    const estagio = estagioImc(imc);
    console.log(estagio);
    mostraImc(imc, estagio, true);
  }
  form.addEventListener('submit', eventoForm);
}


escopo();


