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

const setupCardCarousel = (carouselSelector, prevSelector, nextSelector, cardSelector) => {
  const carousel = document.querySelector(carouselSelector);
  const prev = document.querySelector(prevSelector);
  const next = document.querySelector(nextSelector);

  if (!carousel || !prev || !next) {
    return;
  }

  const updateButtons = () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    prev.disabled = carousel.scrollLeft <= 4;
    next.disabled = carousel.scrollLeft >= maxScroll - 4;
  };

  const scrollCards = (direction) => {
    const card = carousel.querySelector(cardSelector);
    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : carousel.clientWidth * 0.8;

    carousel.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  prev.addEventListener("click", () => scrollCards(-1));
  next.addEventListener("click", () => scrollCards(1));
  carousel.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
};

setupCardCarousel("[data-service-carousel]", "[data-carousel-prev]", "[data-carousel-next]", ".service-card");
setupCardCarousel("[data-voice-carousel]", "[data-voice-prev]", "[data-voice-next]", ".voice-card");
