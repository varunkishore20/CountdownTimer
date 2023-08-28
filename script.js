// Set the date you want to countdown to
// For example: 5 days from the current time
let countDownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

// Update the countdown every 1 second
let interval = setInterval(function() {

    // Get the current date and time
    let now = new Date().getTime();
    
    // Calculate the remaining time
    let distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    
    // If the countdown is finished, display some text
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".timer").textContent = "EXPIRED";
    }

}, 1000);
