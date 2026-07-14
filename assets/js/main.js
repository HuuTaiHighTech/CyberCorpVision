// file tổng hợp những file hiệu ứng
import { initHeader } from "./effects/header.js";
import { initHome } from "./effects/home.js";
import { initBackToTop } from './effects/backtotop.js';
document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initHome();
    initBackToTop();
});
