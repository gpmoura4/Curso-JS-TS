
function showHour(time) {
    let data = new Date(time);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let time = 0;
let timer = 0;
let timeReset = 0;

function startClock() {
    timer = setInterval(() => {
        time += 1000;
        relogio.innerHTML = (showHour(time));
    }, 1000);
}

start.addEventListener('click', () => {
    relogio.classList.remove('relogio-pausado');
    clearInterval(timer);
    startClock();

});

pause.addEventListener('click', () => {
    clearInterval(timer);
    relogio.classList.add('relogio-pausado');
});

reset.addEventListener('click', () => {
    relogio.classList.remove('relogio-pausado');
    clearInterval(timer);
    relogio.innerHTML = showHour(timeReset);
    time = 0;
});

