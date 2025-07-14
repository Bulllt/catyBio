document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function showError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.add("visible");
    input.classList.add("inputError");
  }

  function clearError(input, errorElement) {
    errorElement.classList.remove("visible");
    setTimeout(() => {
      errorElement.textContent = "";
    }, 300);
    input.classList.remove("inputError");
  }

  function validateForm() {
    let valid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
      showError(nameInput, nameError, "Por favor ingresa tu nombre.");
      valid = false;
    } else {
      clearError(nameInput, nameError);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      showError(emailInput, emailError, "El correo es obligatorio.");
      valid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, emailError, "Ingresa un correo válido.");
      valid = false;
    } else {
      clearError(emailInput, emailError);
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      showError(messageInput, messageError, "Por favor escribe un mensaje.");
      valid = false;
    } else {
      clearError(messageInput, messageError);
    }

    return valid;
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formStatus.textContent = "";
    formStatus.className = "formStatus";
    formStatus.style.display = "block";

    if (!validateForm()) return;

    const submitButton = contactForm.querySelector(".submitButton");
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    fetch("https://formspree.io/f/xrblzwek", {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          formStatus.textContent =
            "Mensaje enviado con éxito. Gracias por contactarme.";
          void formStatus.offsetWidth;
          formStatus.classList.add("success");
          contactForm.reset();
        } else {
          throw new Error("Error en el envío");
        }
      })
      .catch((error) => {
        formStatus.textContent =
          "Hubo un error al enviar el mensaje. Por favor intente nuevamente.";
        void formStatus.offsetWidth;
        formStatus.classList.add("error");
        console.error("Error:", error);
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Enviar Mensaje";
      });
  });
});
