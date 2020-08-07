var slider = document.getElementById("trigger");
var slideIndex = 1;
var timer;
var auto = true;

showSlides(slideIndex);

function plusSlides(n) {
  auto = false;
  clearTimeout( timer );
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  auto = false;
  clearTimeout( timer );
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-active');
        dots[i].classList.remove('dot-active');
    }

    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].className += ' slide-active';
    dots[slideIndex-1].className += ' dot-active';
    if(auto)
      slideIndex++;
    timer = setTimeout(showSlides,2000);
}

slider.onmouseover = function() {
    auto = false;
    clearTimeout( timer );
}

slider.onmouseout = function() {
    auto = true;
    timer = setTimeout( showSlides, 2000 );
};
