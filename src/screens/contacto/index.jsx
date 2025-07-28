import React, { useState } from "react";
import Sidebar from "../../components/sidebar/index";

import "./style.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Por favor ingrese su nombre";
    if (!formData.email.trim()) {
      newErrors.email = "Por favor ingrese su correo electrónico";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingrese un correo electrónico válido";
    }
    if (!formData.message.trim())
      newErrors.message = "Por favor ingrese su mensaje";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: "" });

    if (!validateForm()) {
      setStatus({ submitting: false });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xrblzwek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          message: "¡Mensaje enviado con éxito!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error en el envío del formulario");
      }
    } catch (error) {
      setStatus({
        submitting: false,
        error: true,
        message:
          "Hubo un error al enviar el mensaje. Por favor intente nuevamente más tarde.",
      });
    }
  };

  return (
    <div className="mainContainer">
      <Sidebar />

      <main className="mainContent">
        <section className="contactoSection" id="contacto">
          <h2 className="sectionTitle">Contacto</h2>

          <p className="introParagraph">
            Para consultas, colaboraciones o información, por favor complete el
            siguiente formulario y me pondré en contacto a la brevedad.
          </p>

          <form
            id="contactForm"
            className="contactForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="formGroup">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "inputError" : ""}
              />
              <span className={`errorMessage ${errors.name ? "visible" : ""}`}>
                {errors.name}
              </span>
            </div>

            <div className="formGroup">
              <label for="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "inputError" : ""}
              />
              <span className={`errorMessage ${errors.email ? "visible" : ""}`}>
                {errors.email}
              </span>
            </div>

            <div className="formGroup">
              <label for="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "inputError" : ""}
                style={{ resize: "none" }}
              />
              <span
                className={`errorMessage ${errors.message ? "visible" : ""}`}
              >
                {errors.message}
              </span>
            </div>

            <div
              className={`formStatus ${status.success ? "success" : ""} ${
                status.error ? "error" : ""
              }`}
            >
              {status.message}
            </div>

            <button
              type="submit"
              className="submitButton"
              disabled={status.submitting}
            >
              {status.submitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
