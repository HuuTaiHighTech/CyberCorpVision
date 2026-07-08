// file tổng hợp những file hiệu ứng
import { initHeader } from "./effects/header.js";
import { initHome } from "./effects/home.js";

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initHome();
});
