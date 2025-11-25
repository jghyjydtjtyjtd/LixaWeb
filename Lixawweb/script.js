document.addEventListener("DOMContentLoaded", () => {
  // Fade-in on scroll
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Cards click redirect (index.html)
  if (window.location.pathname.includes("index.html")) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const href = card.getAttribute("onclick").match(/'([^']+)'/)[1];
        window.location.href = href;
      });
    });
  }

  // Scroll to hash on services.html
  if (window.location.pathname.includes("services.html") && window.location.hash) {
    const section = document.querySelector(window.location.hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
});
