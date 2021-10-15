const startingminutes = 10;
let timeInSeconds = startingminutes * 60;

const countdownEL = document.getElementById('countdownElement');
setInterval(updateCountdown,1000)

function updateCountdown() {
    const minutes = Math.floor(timeInSeconds/60)
let seconds = timeInSeconds % 60;
if(seconds<10){
seconds = '0'+seconds;
}
countdownEL.innerHTML = `${minutes} : ${seconds}`
timeInSeconds = timeInSeconds - 1 ;
}
