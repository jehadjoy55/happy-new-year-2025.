// Function to check if it's the specified time: January 1, 2025, at 12:00 AM
function checkDate() {
    const now = new Date();
    const targetDate = new Date('January 1, 2025 00:00:00'); // Set the target date: 1st January 2025, 12:00 AM

    // If the current date is equal to or after the target date, show content
    if (now >= targetDate) {
        document.getElementById("content").style.display = "block";
        document.getElementById("timer").style.display = "none";
        document.getElementById("left-time").style.display = "none";
        window.location.href = "https://jehadjoy55.github.io/happy-new-year-2025/"; // Redirect when countdown finishes
    } else {
        // Show countdown timer if it's before the target date
        startCountdown(targetDate);
        startLeftTimeCountdown(targetDate); // Start the left-time countdown as well
    }
}

// Function to start the countdown
function startCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(function() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(interval);
            document.getElementById("content").style.display = "block";
            document.getElementById("timer").style.display = "none";
            document.getElementById("left-time").style.display = "none";
            window.location.href = "https://jehadjoy55.github.io/happy-new-year-2025/"; // Redirect when countdown finishes
        } else {
            // Calculate time remaining
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// Function to start the left-time countdown
function startLeftTimeCountdown(targetDate) {
    const leftTimeElement = document.getElementById("left-time-countdown");

    const interval = setInterval(function() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(interval);
            document.getElementById("content").style.display = "block";
            document.getElementById("timer").style.display = "none";
            document.getElementById("left-time").style.display = "none";
            window.location.href = "https://jehadjoy55.github.io/happy-new-year-2025/"; // Redirect when countdown finishes
        } else {
            // Calculate time remaining for left-time countdown
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            leftTimeElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// Run the function to check the date and start the countdown
checkDate();
