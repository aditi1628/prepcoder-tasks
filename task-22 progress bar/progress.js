function startProgress() {
  const progress = document.getElementById("progress");
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }, 30); // Increase this for slower animation
}
