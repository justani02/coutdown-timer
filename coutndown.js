window.onload = function() {
    // Set the target date and time (e.g., 1 hour from now)
    var targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 1);
  
    // Update the countdown timer every second
    var countdownTimer = setInterval(function() {
      // Get the current date and time
      var now = new Date().getTime();
  
      // Calculate the remaining time
      var remainingTime = targetDate - now;
  
      // Check if the countdown has ended
      if (remainingTime <= 0) {
        clearInterval(countdownTimer);
        document.getElementById("timer").innerHTML = "Countdown ended!";
        return;
      }
  
      // Calculate the hours, minutes, and seconds
      var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      // Format the remaining time as a string
      var countdown = hours + "h " + minutes + "m " + seconds + "s";
  
      // Update the timer display
      document.getElementById("timer").innerHTML = countdown;
    }, 1000);
  };
  
