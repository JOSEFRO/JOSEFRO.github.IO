(() => {
  "use strict";
  const WHATSAPP_NUMBER = "18492529296";
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#nav-menu");
  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");

  document.querySelector("#year").textContent = new Date().getFullYear();

  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
  };
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("is-open", isOpen);
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", () => {
      const select = document.querySelector("#service");
      select.value = link.dataset.service;
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message = [
      "Hola, NEXUS. Me gustaría conversar sobre un proyecto.",
      "",
      "Nombre: " + String(data.get("name")).trim(),
      "Correo: " + String(data.get("email")).trim(),
      "Área: " + String(data.get("service")),
      "",
      "Detalles:",
      String(data.get("message")).trim()
    ].join("\n");

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      feedback.textContent = "Tu navegador bloqueó la ventana. Puedes escribir directamente al WhatsApp +1 (849) 252-9296.";
      return;
    }
    feedback.textContent = "WhatsApp se abrió con tu mensaje preparado. Revísalo y pulsa Enviar allí.";
    form.reset();
  });
})();