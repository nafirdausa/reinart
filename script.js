let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function(){
    alert('Bisaaa');
    nav.classList.toggle('.slidebar');
});

// function slidebar(){
//     // alert('Bisaaa');
//     const menuToggle = document.querySelector('.menu-toggle input');
//     const nav = document.querySelector('nav ul');
//     nav.classList.toggle('.slidebar');
// }