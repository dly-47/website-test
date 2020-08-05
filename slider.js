var sliders = document.getElementById("trigger");
var slideIndex = 1;
var timer;

showSlides(slideIndex);
autoSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].style.backgroundColor = "white";
    // }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-active');
        dots[i].classList.remove('dot-active');
    }
    if (slideIndex > slides.length) slideIndex = 1;
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].style.backgroundColor = "#0d9247";
    slides[slideIndex-1].className += ' slide-active';
    dots[slideIndex-1].className += ' dot-active';
}

function autoSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].style.backgroundColor = "white";
    // }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-active');
        dots[i].classList.remove('dot-active');
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].className += ' slide-active';
    dots[slideIndex-1].className += ' dot-active';
    timer = setTimeout(autoSlides,2000);
}

sliders.onmouseover = function() {
    clearTimeout( timer );
}

sliders.onmouseout = function() {
    timer = setTimeout( autoSlides, 2000 );
};
