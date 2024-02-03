const timerEl = document.getElementById('timer');
const markslist = document.getElementById('marks-list');

let intervelId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minuts = Math.floor(time / 360000) / 6000;
    const seconds = Math.floor(time / 360000) / 6000 / 100;
    const hundredths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minuts.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}