let dt = new Date(new Date().setTime(0))
  let time = dt.getTime();
  let seconds = Math.floor((time % (100*60))/ 1000);
  let minutes = Math.floor((time % (100*60*60))/ (1000*60));
  
  let time = 0;
  
  setInterval(function() {
      if(seconds < 59) {
        seconds++;
      } else {
        minutes++;
        seconds = 0;
      }

      let formatted_sec = seconds <10 ? `0${seconds}` : `${seconds}`;
      let formatted_min = minutes <10 ? `0${minutes}` : `${sminutes}`;
      document.querySelector(".time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    })