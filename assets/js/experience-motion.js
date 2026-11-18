(() => {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveal = document.querySelectorAll(".service-card,.project-card,.case-study,.intro-grid,.section-top,.side-project-note");
  if (!reduce && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-reveal","is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    reveal.forEach((node, index) => {
      node.classList.add("motion-reveal");
      node.style.transitionDelay = Math.min(index % 4, 3) * 65 + "ms";
      observer.observe(node);
    });
  }
  if (reduce || !window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  document.querySelectorAll(".service-card,.project-card,.case-study").forEach(card => {
    card.classList.add("motion-tilt");
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = "perspective(900px) rotateX(" + (-y * 3.2).toFixed(2) + "deg) rotateY(" + (x * 3.8).toFixed(2) + "deg) translateY(-3px)";
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
})();