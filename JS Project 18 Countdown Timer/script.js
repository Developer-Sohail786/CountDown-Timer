 let interval;
      function countdown() {
        clearInterval(interval);
        let days = parseInt(document.querySelector(".dayInput").value) || 0;
        let hrs = parseInt(document.querySelector(".hrInput").value) || 0;
        let mins = parseInt(document.querySelector(".minsInput").value) || 0;
        let secs = parseInt(document.querySelector(".secsInput").value) || 0;

        let totalMilliseconds =
          (days * 24 * 60 * 60 + hrs * 60 * 60 + mins * 60 + secs) * 1000;

        let destination = new Date().getTime() + totalMilliseconds;

         interval = setInterval(() => {
          let current = new Date().getTime();
          let diff = destination - current;

           if (diff <= 0) {
      clearInterval(interval);
      updateDisplay(0, 0, 0, 0);
      return;
    }

          let day = Math.floor(diff / (1000 * 60 * 60 * 24));
          let hr = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          let sec = Math.floor((diff % (1000 * 60)) / 1000);
          updateDisplay(day, hr, min, sec);
        }, 1000);
      }

      function updateDisplay(day, hr, min, sec) {
        document.querySelector(".day").innerHTML = day + "<br/>Days";
        document.querySelector(".hr").innerHTML = hr + "<br/>Hr";
        document.querySelector(".mins").innerHTML = min + "<br/>Mins";
        document.querySelector(".secs").innerHTML = sec + "<br/>Secs";
      }

      function resetcountdown() {
        clearInterval(interval);
        updateDisplay(0, 0, 0, 0);
        document.querySelector(".dayInput").value = "";
        document.querySelector(".hrInput").value = "";
        document.querySelector(".minsInput").value = "";
        document.querySelector(".secsInput").value = "";
      }
       function pauseCountdown() {
    clearInterval(interval); 
  }

      document.querySelector(".btn").addEventListener("click", countdown);
      document.querySelector(".reset-btn").addEventListener("click", resetcountdown);
      document.querySelector(".pause-btn").addEventListener("click", pauseCountdown);