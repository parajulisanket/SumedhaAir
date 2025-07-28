document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const navLinks = nav.querySelectorAll("a");
  const triggerPoint = 200;

  function handleNavScroll() {
    if (window.scrollY > triggerPoint) {
      nav.classList.add("bg-white", "shadow");
      nav.classList.remove("bg-transparent");

      navLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-gray-600");
      });
    } else {
      nav.classList.remove("bg-white", "shadow");
      nav.classList.add("bg-transparent");

      navLinks.forEach((link) => {
        link.classList.remove("text-gray-600", "text-white");
        link.classList.add("text-[#DFA958]");
      });
    }
  }

  window.addEventListener("scroll", handleNavScroll);
  handleNavScroll(); 
});
