const form = document.getElementById("subscription-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    message.style.color = "green";
    message.textContent = "🎉 Subscription successful!";
    emailInput.value = "";

    // Optional: Add API call or backend logic here
  } else {
    message.style.color = "red";
    message.textContent = "⚠️ Please enter a valid email address.";
  }
});

function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
}
