// Minutes
const timerMin = 1;
// Seconds
let timerSec = timerMin * 60;

function calculateTime() {
    let countdown = document.querySelector(".countdown");
    let minutes = Math.floor(timerSec / 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = timerSec % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.textContent = `${minutes} : ${seconds}`;
    timerSec--;

    function startDownload() {  
     const url='https://yadi.sk/d/D1E70Br8eD37iA';    
     window.location.assign(url);
}

    if (timerSec < 0) {
        stopTimer();
        startDownload();
        // alert("Вот и все!");
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }
}

let timerInterval = setInterval(calculateTime, 1000);