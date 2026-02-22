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

/* BUY VIA WHATSAPP FUNCTION */
function buyViaWhatsapp(productName){
  const phoneNumber = '917031829524';
  const productLink = window.location.href;
  const message = `Hello, I want to buy *${productName}* from your shop. Here is the link: ${productLink}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
