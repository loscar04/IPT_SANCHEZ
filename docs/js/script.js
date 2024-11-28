let currentIndexProjects = 0;
let currentIndexPersonal = 0;

function showNextSlide(slideshowClass, currentIndex) {
    const slides = document.querySelectorAll(slideshowClass);
    const totalSlides = slides.length;

    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');

    return currentIndex; 
}


setInterval(() => {
    const slides = document.querySelectorAll('.personal-slideshow .slideshow');
    slides[currentIndexPersonal].classList.remove('active');
    currentIndexPersonal = (currentIndexPersonal + 1) % slides.length;
    slides[currentIndexPersonal].classList.add('active');
}, 3000); 

function changeProjectSlide(direction) {
    const slides = document.querySelectorAll('.projects .slideshow');
    slides[currentIndexProjects].classList.remove('active');
    currentIndexProjects = (currentIndexProjects + direction + slides.length) % slides.length;
    slides[currentIndexProjects].classList.add('active');
}