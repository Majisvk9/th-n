/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;

/* Create dots dynamically */
slides.forEach((_, i)=>{
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if(i===0) dot.classList.add("active");
  dot.addEventListener("click", ()=> showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i){
  index=i;
  slides.forEach(sl=>sl.classList.remove("active"));
  slides[index].classList.add("active");
  dots.forEach(dot=>dot.classList.remove("active"));
  dots[index].classList.add("active");
}

next.addEventListener("click", ()=>{index=(index+1)%slides.length; showSlide(index);});
prev.addEventListener("click", ()=>{index=(index-1+slides.length)%slides.length; showSlide(index);});

/* Auto Slide */
setInterval(()=>{index=(index+1)%slides.length; showSlide(index);}, 4000);

/* CART COUNTER */
let count = 0;
const cartCountEl = document.getElementById("cart-count");

function addToCart(){
  count++;
  cartCountEl.innerText = count;

  cartCountEl.classList.add("cart-animate");
  setTimeout(()=>{cartCountEl.classList.remove("cart-animate");}, 300);
}
