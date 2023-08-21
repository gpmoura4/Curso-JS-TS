const paragraphDiv = document.querySelector('.paragrafos')
const paragraphs = paragraphDiv.querySelectorAll('p');

const bodyStyles = getComputedStyle(document.body);
const backgroundColorBody = bodyStyles.backgroundColor;

const section = document.querySelector('.container');
const sectionStyles = getComputedStyle(section);
const backgroundColorSection = sectionStyles.backgroundColor;

for (let paras of paragraphs) {
  paras.style.backgroundColor = backgroundColorBody;
  paras.style.color = backgroundColorSection;
}