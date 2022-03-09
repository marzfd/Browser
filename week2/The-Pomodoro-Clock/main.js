function main() {

  const setTime = document.getElementById('duration')
  const upBtn = document.getElementById('up');
  const downBtn = document.getElementById('down');
  const playBtn = document.getElementById('play');
  const pauseBtn = document.getElementById('pause');
  const stopBtn = document.getElementById('stop');
  const timeDisplay = document.getElementById('time-display');
  
  let minutes = parseInt(setTime.textContent);
  let seconds = 0;

  // UP key
  function up() {
    if (minutes == 59) {
      minutes = 1
    } else {
      minutes++;
      setTime.textContent = minutes;
    }
  }

  // Down key
  function down() {
    if (minutes == 1) {
      minutes = 59
    } else {
      minutes--;
      setTime.textContent = minutes;
    }
  }

  // Stop key
  function stop() {
    minutes = 25;
    seconds = 0;
    setTime.textContent = minutes;
    timeDisplay.textContent = `${minutes}:00`;
    timeDisplay.style.color = '#ebe6e6'
    upBtn.addEventListener('click', up);
    downBtn.addEventListener('click', down);
    playBtn.addEventListener('click', play);
  }

  // Play key
  function play() {

    upBtn.removeEventListener('click', up);
    downBtn.removeEventListener('click', down);
    playBtn.removeEventListener('click', play);
    stopBtn.removeEventListener('click', stop);
    pauseBtn.addEventListener('click', pause);

    function timer() {

      if (seconds !== 0) {
          seconds--;
          timeDisplay.textContent = `${minutes}:${seconds}`;
          
      } else if (minutes !== 0 && seconds == 0) {
          seconds = 59;
          minutes--;
        
      } else {
          timeDisplay.textContent = `Time's Up !`;
          timeDisplay.style.color = '#852747'

          clearInterval(time);
          stopBtn.addEventListener('click', stop);
      }
      
    }
    
    timer();

    const time = setInterval(timer, 1000);

      // Pause key
      function pause() {
        clearInterval(time);
        pauseBtn.removeEventListener('click', pause);
        playBtn.addEventListener('click', play);
        stopBtn.addEventListener('click', stop);
      }

  }

  upBtn.addEventListener('click', up);
  downBtn.addEventListener('click', down);
  playBtn.addEventListener('click', play);
  stopBtn.addEventListener('click', stop);
}

main();