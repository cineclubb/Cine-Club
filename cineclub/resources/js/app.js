const config = {
    images: [
        '1.png',
        '2.png',
        '3.png'
    ],
    interval: 6000, // 6 segundos
    transitionDuration: 1.5 // segundos
};

// Elementos do DOM
const carrossel = document.getElementById('carrossel');
let currentSlide = 0;
let slideInterval;

// Cria os slides do carrossel
function createSlides() {
    config.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'carrossel-slide';
        
        // Verifica se a imagem existe
        const img = new Image();
        img.src = image;
        
        
        img.onload = () => {
            slide.style.backgroundImage = url('${image}');
        };
        
        if (index === 0) {
            slide.classList.add('active');
        }
        carrossel.insertBefore(slide, carrossel.firstChild);
    });
}

// Mostra um slide específico
function showSlide(index) {
    const slides = document.querySelectorAll('.carrossel-slide');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    resetInterval();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startInterval() {
    slideInterval = setInterval(nextSlide, config.interval);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

// Inicialização
function initCarrossel() {
    createSlides();
    startInterval();
    
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    
    carrossel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carrossel.addEventListener('mouseleave', startInterval);
}

// Inicia quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initCarrossel);