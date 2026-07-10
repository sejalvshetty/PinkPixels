let timer = null;

let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.getElementById("stopwatchDisplay");

function updateDisplay() {

    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    display.textContent = `${h} : ${m} : ${s}`;

}

function startStopwatch() {

    if (timer !== null) return;

    timer = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);

}

function pauseStopwatch() {

    clearInterval(timer);
    timer = null;

}

function resetStopwatch() {

    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();

}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("pauseBtn").addEventListener("click", pauseStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);

updateDisplay();