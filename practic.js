const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const counter = document.querySelector('.counter');
const pagination = document.querySelector('.pagination');
const sliderContainer = document.querySelector('.slider-container');

let currentIndex = 0;
let autoSlideInterval;

function updateCounter() {
    counter.textContent = `Изображение ${currentIndex + 1} из ${slides.length}`;
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updatePagination();
    updateCounter();
}

function updatePagination() {
    const dots = document.querySelectorAll('.pagination .dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
function initPagination() {
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
        pagination.appendChild(dot);
    });
}
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
sliderContainer.addEventListener('mouseleave', startAutoSlide);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

const hammer = new Hammer(sliderContainer);
hammer.on('swipeleft', nextSlide);
hammer.on('swiperight', prevSlide);

showSlide(currentIndex);
initPagination();
startAutoSlide();