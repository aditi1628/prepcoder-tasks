// Set the offer end date (YYYY, MM (0-based), DD, HH, MM, SS)
const offerEndDate = new Date("2024-07-31T23:59:59").getTime();

// Update the countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = offerEndDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    clearInterval(timer);
    document.querySelector(".countdown").style.display = "none";
    document.getElementById("expired-text").classList.remove("hidden");
  }
}, 1000);
