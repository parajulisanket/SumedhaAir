document.addEventListener("DOMContentLoaded", () => {
  function animateCount(el, end, suffix = "", duration = 1400) {
    let start = 0;
    let startTime = null;
    function update(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = end + suffix;
    }
    requestAnimationFrame(update);
  }

  // Only animate when section is in viewport
  const counters = document.querySelectorAll(".counter");
  let animated = false;
  function onScroll() {
    const section = counters[0]?.closest("section");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (!animated && rect.top < window.innerHeight - 100) {
      animated = true;
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target"));
        const isPercent =
          el.textContent.includes("%") ||
          el.getAttribute("data-target") === "100";
        animateCount(el, target, isPercent ? "%" : "");
      });
      window.removeEventListener("scroll", onScroll);
    }
  }
  window.addEventListener("scroll", onScroll);
  // If section already in view on page load
  onScroll();
});
