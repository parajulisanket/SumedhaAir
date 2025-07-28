const nav = document.getElementById("mainNav");

function handleNavScroll() {
  const triggerPoint = 200;
  if (window.scrollY > triggerPoint) {
    nav.classList.add("bg-white", "text-gray-600", "shadow", "navbar-scrolled");
    nav.classList.remove("bg-transparent", "text-white");
  } else {
    nav.classList.remove(
      "bg-white",
      "text-gray-600",
      "shadow",
      "navbar-scrolled"
    );
    nav.classList.add("bg-transparent", "text-white");
  }
}

window.addEventListener("scroll", handleNavScroll);
handleNavScroll();
