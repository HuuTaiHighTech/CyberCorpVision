// Thư viện chạy cho trang home

// Hàm 1: Xử lý carousel + đổi background header theo slide active
function initHeroCarousel() {
    const sliderEl = document.querySelector('.banner-slider');
    const nextBtn = document.querySelector('.slick-next');
    const prevBtn = document.querySelector('.slick-prev');
    const header = document.querySelector('header');

    if (!sliderEl || !nextBtn || !prevBtn) {
        return;
    }

    const slides = Array.from(sliderEl.querySelectorAll('.banner-slide'));
    if (slides.length === 0) return;

    let currentIndex = slides.findIndex((s) => s.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;

    const updateHeaderBackground = (imageSrc) => {
        if (!header) return;
        header.style.backgroundImage = imageSrc ? `url('${imageSrc}')` : 'none';
    };

    const goToSlide = (index) => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');

        const img = slides[currentIndex].querySelector('img');
        updateHeaderBackground(img?.getAttribute('src'));
    };

    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
}

document.addEventListener('DOMContentLoaded', initHeroCarousel);

// Hàm 2: Xử lý hiệu ứng fadeOutDown -> rớt về vị trí ban đầu cho các phần tử khớp selector
function initDropDownAnimation(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
        el.addEventListener('animationend', function handler(e) {
            if (e.animationName === 'fadeOutDown') {
                el.classList.remove('animate__animated', 'animate__fadeOutDown');
                el.classList.add('drop-back');
            }
        }, { once: true });
    });
}

// Gọi cả 2 hàm khi khởi tạo trang home
export function initHome() {
    initHeroCarousel();
    initDropDownAnimation('.title, .content, .cta');
}