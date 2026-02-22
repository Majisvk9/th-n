let count = 0;

function addToCart(){
  count++;
  document.getElementById("cart-count").innerText = count;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;

/* Create dots */
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if(i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i){
  index = i;
  document.querySelector(".slides").style.transform =
    `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

/* Auto Slide */
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);
}
