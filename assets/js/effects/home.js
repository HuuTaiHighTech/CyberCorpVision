function replayAnimations(slide) {
    const animatedEls = slide.querySelectorAll('.animate__animated');

    animatedEls.forEach(el => {
        // Lấy class animation hiện có của phần tử
        const animationClass = [...el.classList].find(cls =>
            cls.startsWith('animate__') &&
            cls !== 'animate__animated' &&
            !cls.startsWith('animate__delay')
        );

        if (!animationClass) return;

        // Xóa hiệu ứng cũ
        el.classList.remove(animationClass);

        // Ép reflow để animation có thể chạy lại
        void el.offsetWidth;

        // Thêm lại đúng hiệu ứng ban đầu
        el.classList.add(animationClass);
    });
}

// Hàm 1: Xử lý carousel
function initHeroCarousel() {
    const sliderEl = document.querySelector('.banner-slider');
    const nextBtn = document.querySelector('.slick-next');
    const prevBtn = document.querySelector('.slick-prev');

    if (!sliderEl || !nextBtn || !prevBtn) {
        return;
    }

    const slides = Array.from(sliderEl.querySelectorAll('.banner-slide'));
    if (slides.length === 0) return;

    let currentIndex = slides.findIndex((s) => s.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;

    let autoSlideInterval = null;

    const goToSlide = (index) => {
        // Ẩn slide cũ
        slides[currentIndex].classList.remove('active');

        // Tính index mới
        currentIndex = (index + slides.length) % slides.length;

        // Hiện slide mới
        slides[currentIndex].classList.add('active');

        // Chạy lại hiệu ứng cho slide mới active
        replayAnimations(slides[currentIndex]);
    };

    // Bắt đầu tự động chạy
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    };

    // Dừng và chạy lại từ đầu (dùng khi user bấm next/prev thủ công)
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    });

    // Tùy chọn: dừng auto khi hover vào banner, chạy lại khi rời chuột
    sliderEl.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    sliderEl.addEventListener('mouseleave', startAutoSlide);

    // Khởi động auto slide ngay khi init
    
}

// Hàm 2: Xử lý fadeOutDown -> drop-back (nếu bạn còn dùng)
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

// Khởi tạo trang home
export function initHome() {
    initHeroCarousel();
    initDropDownAnimation('.title, .content, .cta');
}