// function criaParagrafo() {
//   const p = document.createElement('p');
//   return p;
// }

// function createElement() {
//   const resultado = document.querySelector('.resultado');
//   const paragraph = criaParagrafo();
//   paragraph.innerHTML = 'TESTE';
//   resultado.appendChild(paragraph);
// }

// createElement();

const elementos = [
  { tag: 'p', texto: 'Israel' },
  { tag: 'div', texto: 'Paulo' },
  { tag: 'footer', texto: 'Georgina' },
  { tag: 'section', texto: 'Guilherme' },
];

const resultado = document.querySelector('.resultado');

elementos.forEach((value, index) => {
  const currentElement = document.createElement(elementos[index].tag);
  currentElement.innerHTML = elementos[index].texto;
  resultado.appendChild(currentElement);
});
