// file tổng hợp những file hiệu ứng
import { initHeader } from "./effects/header.js";
import { initHome } from "./effects/home.js";

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initHome();
});

// của trang about
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.toggle-right-sidebar');
    const sidebar = document.getElementById('right-sidebar');
    const toggleIcon = document.querySelector('.title-open-right-sidebar');

    if (toggleBtn && sidebar && toggleIcon) {
        toggleBtn.addEventListener('click', function () {
            // toggle trả về true nếu class được thêm vào (đang đóng), false nếu bị gỡ ra (đang mở)
            const isClosed = sidebar.classList.toggle('hide-right-bar-notifications');

            // Tự động chuyển đổi qua lại giữa 2 class icon dựa vào trạng thái đóng/mở
            toggleIcon.classList.toggle('fa-angle-double-left', isClosed);
            toggleIcon.classList.toggle('fa-angle-double-right', !isClosed);
        });
    }
});