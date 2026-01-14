// ================= SERVICE SLIDER =================
const track = document.querySelector("#sliderTrack");
const cards = document.querySelectorAll(".service-card");
const dotsContainer = document.querySelector("#dots");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

let currentIndex = 1;

/* CREATE DOTS */
cards.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === currentIndex) dot.classList.add("active");

  dot.addEventListener("click", () => moveSlider(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

/* SLIDER FUNCTION */
function moveSlider(index) {
  // Remove active class from all cards and dots
  cards.forEach(card => card.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  // Add active class to selected card and dot
  cards[index].classList.add("active");
  dots[index].classList.add("active");

  // Calculate and apply transform
  const cardWidth = cards[0].offsetWidth + 30;
  const offset = (index - 1) * cardWidth;

  track.style.transform = `translateX(${-offset}px)`;
  currentIndex = index;
}

/* CLICK ON CARD */
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    moveSlider(index);
  });
});

/* NEXT BUTTON */
nextBtn.addEventListener("click", () => {
  let next = currentIndex + 1;
  if (next >= cards.length) next = cards.length - 1;
  moveSlider(next);
});

/* PREV BUTTON */
prevBtn.addEventListener("click", () => {
  let prev = currentIndex - 1;
  if (prev < 0) prev = 0;
  moveSlider(prev);
});

/* Initialize first card as active */
moveSlider(currentIndex);


// ================= LOGO SLIDER =================
const logoTrack = document.querySelector("#logoTrack");
const logoPrev = document.querySelector("#logoPrev");
const logoNext = document.querySelector("#logoNext");

let logoIndex = 0;
const logoWidth = 220; // width + gap
const visibleLogos = 4;

logoNext.addEventListener("click", () => {
  const maxIndex = logoTrack.children.length - visibleLogos;
  if (logoIndex < maxIndex) {
    logoIndex++;
    logoTrack.style.transform = `translateX(-${logoIndex * logoWidth}px)`;
  }
});

logoPrev.addEventListener("click", () => {
  if (logoIndex > 0) {
    logoIndex--;
    logoTrack.style.transform = `translateX(-${logoIndex * logoWidth}px)`;
  }
});

// ================= TESTIMONIAL SLIDER =================
const testimonialTrack = document.querySelector("#testimonialTrack");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialPrev = document.querySelector("#testimonialPrev");
const testimonialNext = document.querySelector("#testimonialNext");

let testimonialIndex = 2;

function moveTestimonial(index) {
  testimonialCards.forEach(card => card.classList.remove("active"));
  testimonialCards[index].classList.add("active");
  
  const cardWidth = testimonialCards[0].offsetWidth + 30;
  const offset = (index - 2) * cardWidth;
  
  testimonialTrack.style.transform = `translateX(${-offset}px)`;
  testimonialIndex = index;
}

if (testimonialPrev) {
  testimonialPrev.addEventListener("click", () => {
    let prev = testimonialIndex - 1;
    if (prev < 0) prev = 0;
    moveTestimonial(prev);
  });
}

if (testimonialNext) {
  testimonialNext.addEventListener("click", () => {
    let next = testimonialIndex + 1;
    if (next >= testimonialCards.length) next = testimonialCards.length - 1;
    moveTestimonial(next);
  });
}

/* Initialize testimonial */
moveTestimonial(testimonialIndex);


// ================= START BUTTON =================
const startBtn = document.querySelector("#startBtn");

if (startBtn) {
  startBtn.addEventListener("click", async () => {
    try {
      console.log("Let's get started clicked!");
      // Add your functionality here
      // Example: Navigate to another page or show a modal
    } catch (error) {
      console.error("Error:", error);
    }
  });
}


// ================= EXAMPLE AXIOS USAGE =================
// Uncomment and modify as needed
/*
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
*/