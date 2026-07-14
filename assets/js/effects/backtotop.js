// Thư viện chạy cho nút back to top
export function initBackToTop() {
    const backToTopEl = document.querySelector('.js-cd-top');

    if (!backToTopEl) {
        return;
    }

    const SCROLL_THRESHOLD = 400; // px cuộn xuống bao nhiêu thì hiện nút

    const toggleVisibility = () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            backToTopEl.classList.add('cd-top--is-visible', 'cd-top--fade-out');
        } else {
            backToTopEl.classList.remove('cd-top--is-visible', 'cd-top--fade-out');
        }
    };

    const scrollToTop = (event) => {
        event.preventDefault(); // chặn reload / nhảy trang do href=""
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', toggleVisibility);
    backToTopEl.addEventListener('click', scrollToTop);

    toggleVisibility(); // set trạng thái đúng ngay khi load trang
}