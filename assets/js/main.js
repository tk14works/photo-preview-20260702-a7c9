const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const serviceCarousel = document.querySelector("[data-service-carousel]");
const servicePrev = document.querySelector("[data-carousel-prev]");
const serviceNext = document.querySelector("[data-carousel-next]");

if (serviceCarousel && servicePrev && serviceNext) {
  const updateServiceButtons = () => {
    const maxScroll = serviceCarousel.scrollWidth - serviceCarousel.clientWidth;
    servicePrev.disabled = serviceCarousel.scrollLeft <= 4;
    serviceNext.disabled = serviceCarousel.scrollLeft >= maxScroll - 4;
  };

  const scrollServiceCards = (direction) => {
    const card = serviceCarousel.querySelector(".service-card");
    const styles = window.getComputedStyle(serviceCarousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : serviceCarousel.clientWidth * 0.8;

    serviceCarousel.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  servicePrev.addEventListener("click", () => scrollServiceCards(-1));
  serviceNext.addEventListener("click", () => scrollServiceCards(1));
  serviceCarousel.addEventListener("scroll", updateServiceButtons, { passive: true });
  window.addEventListener("resize", updateServiceButtons);
  updateServiceButtons();
}
