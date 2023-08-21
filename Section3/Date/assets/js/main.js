function zeroAEsquerda(number) {
  return number >= 10 ? number : `0${number}`
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minuto = zeroAEsquerda(data.getMinutes());
  const segundo = zeroAEsquerda(data.getSeconds());

  return (`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);
}

function getWeekDay(data) {
  const weekDay = data.getDay();

  switch (weekDay) {
    case 0:
      return ('Domingo');
    case 1:
      return ('Segunda');

    case 2:
      return ('Terça-Feira');

    case 3:
      return ('Quarta-Feira');
    case 4:
      return ('Quinta-Feira');
    case 5:
      return ('Sexta-Feira');
    case 6:
      return ('Sábado');
  }

}


const data = new Date();
const dataFormatada = formataData(data);
console.log(dataFormatada);
const weekDay = getWeekDay(data);
console.log(weekDay);

const titulo = document.querySelector('#titulo');
titulo.innerHTML = (`${weekDay}, ${dataFormatada}`);

