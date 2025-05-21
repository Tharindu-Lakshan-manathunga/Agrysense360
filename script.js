const modal = document.getElementById("imageModal");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("closeModal");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const images = Array.from(document.querySelectorAll(".intro-img"));
let currentIndex = 0;
let isZoomed = false;

// Open modal
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    popupImage.src = img.src;
    popupImage.classList.remove("zoomed");
    isZoomed = false;
    modal.classList.add("active");
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  popupImage.classList.remove("zoomed");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    popupImage.classList.remove("zoomed");
  }
});

// Navigation
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  popupImage.src = images[currentIndex].src;
  popupImage.classList.remove("zoomed");
  isZoomed = false;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImage.src = images[currentIndex].src;
  popupImage.classList.remove("zoomed");
  isZoomed = false;
});

// Zoom on double-click
popupImage.addEventListener("dblclick", () => {
  isZoomed = !isZoomed;
  popupImage.classList.toggle("zoomed", isZoomed);
});

// Scroll animation
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
