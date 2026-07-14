// Thư viện chạy cho trang home
export function initHome() {
    const carouselEl = document.querySelector('#carouselExample');
    const nextBtn = document.querySelector('.cta-next');
    const prevBtn = document.querySelector('.cta-prev');
    const header = document.querySelector('header');

    if (!carouselEl || !nextBtn || !prevBtn || !header || !window.bootstrap) {
        return;
    }

    const carousel = new bootstrap.Carousel(carouselEl, {
        interval: false,
        wrap: true,
    });

    const updateHeaderBackground = (imageSrc) => {
        header.style.backgroundImage = imageSrc ? `url('${imageSrc}')` : 'none';
    };

    const setBackgroundFromActiveSlide = () => {
        const activeItem = carouselEl.querySelector('.carousel-item.active');
        const activeImg = activeItem?.querySelector('img');
        updateHeaderBackground(activeImg?.getAttribute('src'));
    };

    nextBtn.addEventListener('click', () => carousel.next());
    prevBtn.addEventListener('click', () => carousel.prev());

    carouselEl.addEventListener('slid.bs.carousel', () => {
        setBackgroundFromActiveSlide();
    });

    setBackgroundFromActiveSlide();
}

