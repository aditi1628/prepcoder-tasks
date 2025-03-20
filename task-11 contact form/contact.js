document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Name Validation
    const nameInput = document.getElementById("name");
    const nameError = nameInput.nextElementSibling;
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    // Email Validation
    const emailInput = document.getElementById("email");
    const emailError = emailInput.nextElementSibling;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Enter a valid email";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Message Validation
    const messageInput = document.getElementById("message");
    const messageError = messageInput.nextElementSibling;
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message cannot be empty";
      messageError.style.display = "block";
      isValid = false;
    } else {
      messageError.style.display = "none";
    }

    // If all fields are valid, show success message
    if (isValid) {
      document.getElementById("success-message").textContent =
        "Message sent successfully!";
      this.reset();
    }
  });
