(function () {
  const chips = document.querySelectorAll(".blog-chip");
  const cards = document.querySelectorAll("#blog-grid [data-category]");
  const search = document.getElementById("blog-search");

  function applyFilters() {
    const activeChip = document.querySelector(".blog-chip.active");
    const cat = activeChip ? activeChip.getAttribute("data-filter") : "all";
    const q = (search?.value || "").toLowerCase();

    cards.forEach((card) => {
      const inCat = cat === "all" || card.dataset.category === cat;
      const text = card.innerText.toLowerCase();
      const inSearch = q === "" || text.includes(q);
      card.style.display = inCat && inSearch ? "" : "none";
    });
  }

  chips.forEach((c) => {
    c.addEventListener("click", () => {
      chips.forEach((x) => x.classList.remove("active"));
      c.classList.add("active");
      applyFilters();
    });
  });

  if (search) search.addEventListener("input", applyFilters);

  // initial
  applyFilters();
})();
