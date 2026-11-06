(() => {
  "use strict";
  const WHATSAPP_NUMBER = "18492529296";
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#nav-menu");
  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    if (!menu || !menuButton) return;
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
  };
  if (menuButton && menu) {
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
  }

  document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", () => {
      const select = document.querySelector("#service");
      if (select) select.value = link.dataset.service;
    });
  });

  if (form) form.addEventListener("submit", event => {
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
    const opened = window.open(url, "_blank");
    if (!opened) {
      if (feedback) feedback.textContent = "Tu navegador bloqueó la ventana. Puedes escribir directamente al WhatsApp +1 (849) 252-9296.";
      return;
    }
    if (feedback) feedback.textContent = "WhatsApp se abrió con tu mensaje preparado. Revísalo y pulsa Enviar allí.";
    // Keep the form values so the visitor can return from WhatsApp and edit the message if needed.
  });

  document.querySelectorAll(".service-visual img").forEach(img => {
    img.addEventListener("error", () => { img.style.display = "none"; }, { once: true });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".service-card,.project-card,.step,.intro-grid,.section-top");
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach(item => observer.observe(item));
  }

  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(1000px) rotateY(" + (x * 3.5).toFixed(2) + "deg) rotateX(" + (-y * 3.5).toFixed(2) + "deg) translateY(-5px)";
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }
  // Progress indicator and lightweight hero parallax (no external runtime).
  const progress = document.createElement("div");
  progress.className = "nexus-scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);
  let progressTicking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ")";
    progressTicking = false;
  };
  window.addEventListener("scroll", () => {
    if (!progressTicking) {
      progressTicking = true;
      window.requestAnimationFrame(updateProgress);
    }
  }, { passive: true });
  updateProgress();

  const hero = document.querySelector(".hero-editorial");
  const heroCard = document.querySelector(".hero-main-card");
  if (hero && heroCard && !reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    hero.addEventListener("pointermove", event => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      hero.style.setProperty("--pointer-x", (x * 100).toFixed(1) + "%");
      hero.style.setProperty("--pointer-y", (y * 100).toFixed(1) + "%");
      heroCard.style.setProperty("--hero-rotate-y", ((x - .5) * 5).toFixed(2) + "deg");
      heroCard.style.setProperty("--hero-rotate-x", ((.5 - y) * 4).toFixed(2) + "deg");
      hero.style.setProperty("--robot-x", ((x - .5) * 9).toFixed(1) + "px");
      hero.style.setProperty("--robot-y", ((y - .5) * 7).toFixed(1) + "px");
    });
    hero.addEventListener("pointerleave", () => {
      heroCard.style.setProperty("--hero-rotate-y", "0deg");
      heroCard.style.setProperty("--hero-rotate-x", "0deg");
      hero.style.setProperty("--pointer-x", "50%");
      hero.style.setProperty("--pointer-y", "42%");
      hero.style.setProperty("--robot-x", "0px");
      hero.style.setProperty("--robot-y", "0px");
    });
  }

})();