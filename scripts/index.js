document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const menuPanel = document.getElementById("menu-panel");
  const menuOverlay = document.getElementById("menu-overlay");

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      menuPanel.style.transform = "translateX(0%)";
    }, 10);
  }

  function closeMenuFunc() {
    // Animate out
    menuPanel.style.transform = "translateX(-100%)";
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }

  if (menuBtn && mobileMenu && closeMenu && menuPanel && menuOverlay) {
    menuBtn.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeMenuFunc);
    menuOverlay.addEventListener("click", closeMenuFunc);
  }
});

// arrow part
const CARDS_TO_SHOW = 4;
let startIdx = 0;

function updateCarousel() {
  const cards = document.querySelectorAll(".carousel-card");
  cards.forEach((card, idx) => {
    if (idx >= startIdx && idx < startIdx + CARDS_TO_SHOW) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("arrow-left").addEventListener("click", () => {
  if (startIdx > 0) {
    startIdx--;
    updateCarousel();
  }
});

document.getElementById("arrow-right").addEventListener("click", () => {
  const cards = document.querySelectorAll(".carousel-card");
  if (startIdx < cards.length - CARDS_TO_SHOW) {
    startIdx++;
    updateCarousel();
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", updateCarousel);
