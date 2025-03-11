document.getElementById("cta-btn").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("cta-section").scrollIntoView({ behavior: "smooth" });
});
