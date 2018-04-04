let status = 0;
let time = 0;
function start() {
  if (!status) timer();
}

let timerId;

function stop() {
  status = 0;
  clearTimeout(timerId);
}
function restart() {
  time = 0;
  status = 0;
  clearTimeout(timerId);
  document.getElementById("stopwatch").innerHTML = "00:00";
}

function timer() {
  status = 1;
  timerId = setInterval(function() {
    time++;
    let min = Math.floor(time / 60);
    let sec = Math.floor(time);
    if (min < 10) {
      min = "0" + min;
    }
    if (sec >= 60) {
      sec = sec % 60;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    document.getElementById("stopwatch").innerHTML = min + ":" + sec;
  }, 1000);
}