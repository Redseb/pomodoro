window.onload = function () {
    let display = document.getElementById("timerDisplay");
    let timerButton = document.getElementById("timerButton");
    var countDownDate = new Date().getTime() + 1500000; //now + 25 minutes in milliseconds;
    var isOnBreak = false;
    var alarmAudio = new Audio('alarm_clock.mp3');

    timerButton.addEventListener("click", buttonPress, false);

    function buttonPress() {
        alarmAudio.pause();
        if (isOnBreak) {
            countDownDate = new Date().getTime() + 300000; //now + 5 minutes in milliseconds (300000)
        } else {
            countDownDate = new Date().getTime() + 1500000; //now + 25 minutes in milliseconds (1500000)
        }
    }

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        display.innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished
        if (distance < 0) {
            isOnBreak = !isOnBreak; //Toggle isOnBreak
            if (isOnBreak) {
                timerButton.innerHTML = "+5 Minutes of Break";
            } else {
                timerButton.innerHTML = "+25 Minutes of work";
            }
            buttonPress(); //Automatically start the next round
            alarmAudio.play();
        }
    }, 1000);
}
