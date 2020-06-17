//Slider IMG
var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var index = 0;
function nextSlide(){
	slides[index].classList.remove('active');
	index = (index + 1) % slides.length;
	slides[index].classList.add('active');
}

function prevSlide(){
	slides[index].classList.remove('active');
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add('active');
}



//Slider Text

var slideshowText = document.getElementById('slideshowText');
var slidesText = slideshowText.getElementsByTagName('div');
var count = 0;
function nextSlideText(){
	slidesText[count].classList.remove('active');
	count = (count + 1) % slidesText.length;
	slidesText[count].classList.add('active');
}

function prevSlideText(){
	slidesText[count].classList.remove('active');
	count = (count - 1 + slidesText.length) % slidesText.length;
	slidesText[count].classList.add('active');
}

//menu

function menuToggle(){
	var nav = document.getElementById('navbar');
	nav.classList.toggle('active');
}