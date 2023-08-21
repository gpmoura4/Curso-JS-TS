import { randNum, generateRandomLetter, generateRandomSymbol } from './module2';

class passwordGenerator {

    constructor() {
        this.btn = document.querySelector('#creates-pw-btn');
        this.selectPwLength = document.querySelector('#password-length');
        this.checkboxInput = document.querySelectorAll('.checkbox-input');
        this.result = document.querySelector('.results');
    }

    start() {
        this.btn.addEventListener('click', (e) => {
            let pwLenght = this.takesPwLength(this.selectPwLength);
            let pwCaracters = [];
            let password = [];
            let isValid = false;

            while (pwLenght > 0) {
                for (let input of this.checkboxInput) {
                    const isChecked = input.checked;
                    const previousElement = input.previousElementSibling;

                    // Verificando se nenhuma opção foi marcada
                    if (isChecked) isValid = true;

                    if (isChecked && previousElement.textContent === 'Adicionar números') pwCaracters.push(randNum(0, 9));
                    if (isChecked && previousElement.textContent === 'Letras Maiúsculas') pwCaracters.push(generateRandomLetter(false));
                    if (isChecked && previousElement.textContent === 'Letras Minúsculas') pwCaracters.push(generateRandomLetter(true));
                    if (isChecked && previousElement.textContent === 'Símbolos') pwCaracters.push(generateRandomSymbol());
                }
                // adicionando um caractere a partir de um index aleatorio 
                password.push(pwCaracters[randNum(0, pwCaracters.length - 1)]);
                pwLenght--;
            }
            // erro caso nenhuma opção esteja marcada
            if (!isValid) {
                this.showResults('ERRO: nenhuma opção marcada.', isValid);
                return
            }

            const finalPw = password.join('');
            this.showResults(`${finalPw}`);
        });
    }

    showResults(msg, isValid) {
        // removendo o paragrafo ja existente
        const pToRemove = this.result.querySelector('p');
        console.log(pToRemove);
        if (this.result.contains(pToRemove)) pToRemove.remove();


        const p = document.createElement('p');
        p.innerHTML = msg;
        if (!isValid) {
            p.classList.add('error');
        } else {
            p.classList.add('accepted');
        }
        this.result.appendChild(p);
    }

    takesPwLength(selectPwLength) {
        let selectedValue = selectPwLength.value;

        selectPwLength.addEventListener("change", () => {
            selectedValue = selectPwLength.value;

            return selectedValue;
        });
        return selectedValue;
    }

}



export { passwordGenerator as default };
