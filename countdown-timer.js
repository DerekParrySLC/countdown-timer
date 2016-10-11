function startTimer(duration) {

var myCountdown = setInterval(function countDown() {

  if((window.myTimer == null) || (window.myTimer < 0)) {
    window.myTimer = duration;
  }

  document.querySelector('body').innerHTML = `Timer: ${window.myTimer}`;

  window.myTimer -= 1;

  if(window.myTimer == -1) {
    clearInterval(myCountdown);
    document.querySelector('body').innerHTML = `Timer: TIME!`;
  }
}, 1000);

return "It's working!"

};

startTimer(10);
