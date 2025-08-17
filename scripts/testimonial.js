const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    if (i === index) {
      t.classList.remove("hidden");
      t.classList.add("active");
    } else {
      t.classList.add("hidden");
      t.classList.remove("active");
    }
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Initialize
showTestimonial(currentIndex);
