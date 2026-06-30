# Cấu Trúc Thư Mục Dự Án CyberCorpVision

> Tài liệu mô tả cấu trúc thư mục và mục đích của từng thành phần trong dự án **CyberCorpVision**.

---

# Tổng Quan

Dự án được chia thành các nhóm thư mục chính:

- **analytics/** → Lưu tài liệu phân tích, sơ đồ và tài liệu thiết kế.
- **assets/** → Chứa toàn bộ tài nguyên giao diện (CSS, JavaScript, hình ảnh, font...).
- **pages/** → Chứa các trang HTML của website.

---

# Ý Nghĩa Các Thư Mục

| Thư mục | Mục đích |
|----------|----------|
| `analytics/` | Lưu tài liệu phân tích, flowchart, UML, draw.io, task và các tài liệu thiết kế của dự án. |
| `assets/` | Chứa toàn bộ tài nguyên (Assets) phục vụ giao diện website. |
| `assets/css/` | Chứa tất cả các file CSS của dự án. |
| `assets/css/core/` | CSS nền tảng dùng chung như Reset, Variables, Typography, Utility... |
| `assets/css/layouts/` | CSS bố cục của website như Header, Footer, Grid, Section... |
| `assets/img/` | Chứa toàn bộ hình ảnh của dự án. |
| `assets/img/home/` | Hình ảnh dành cho trang Home. |
| `assets/img/about/` | Hình ảnh dành cho trang About. |
| `assets/img/service/` | Hình ảnh dành cho trang Service. |
| `assets/js/` | Chứa toàn bộ mã JavaScript của dự án. |
| `assets/js/effects/` | Chứa các hiệu ứng JavaScript như Animation, Slider, Scroll... |
| `pages/` | Chứa các trang HTML hoàn chỉnh của website. |

---

# Giải Thích Một Số Thư Mục Chuẩn Trong Front-end

> Các thư mục dưới đây thường xuất hiện trong các framework như **React**, **Vue** hoặc **Angular**.

| Thư mục | Mục đích |
|----------|----------|
| `src/` | Chứa toàn bộ mã nguồn (Source Code) của ứng dụng. Đây là nơi lập trình chính. |
| `public/` | Chứa các tài nguyên tĩnh (Static Assets) được phục vụ trực tiếp khi chạy hoặc build website. Ví dụ: favicon, robots.txt, manifest, ảnh tĩnh... |
| `src/assets/` | Chứa hình ảnh, icon, font... được quản lý bởi mã nguồn và sẽ được Bundler xử lý khi build. |
| `layouts/` | Chứa các Layout hoặc bố cục dùng chung như Header, Footer, Sidebar, Main Layout... |

> **Lưu ý:** Dự án **CyberCorpVision** hiện là dự án **HTML/CSS/JavaScript thuần**, vì vậy **không sử dụng** thư mục `src/` và `public/`. Thay vào đó, tài nguyên được quản lý trực tiếp trong thư mục `assets/`.

---

# Sơ Đồ Cây Thư Mục

```text
CyberCorpVision/
│
├── analytics/
│   ├── draw.io/          ← Sơ đồ thiết kế
│   └── task/             ← Nhiệm vụ và ghi chú
│
├── assets/
│   ├── css/
│   │   ├── core/         ← CSS dùng chung
│   │   └── layouts/      ← CSS bố cục
│   │
│   ├── img/
│   │   ├── about/        ← Hình ảnh trang About
│   │   ├── home/         ← Hình ảnh trang Home
│   │   └── service/      ← Hình ảnh trang Service
│   │
│   └── js/
│       └── effects/      ← Hiệu ứng JavaScript
│
└── pages/                ← Các trang HTML
```

---

# Quy Ước Tổ Chức

- `analytics/`
  - Chỉ chứa tài liệu phân tích, sơ đồ và ghi chú.
  - Không chứa mã nguồn.

- `assets/`
  - Chỉ chứa tài nguyên phục vụ giao diện.
  - Không chứa file HTML.

- `pages/`
  - Chỉ chứa các trang HTML của website.

- `assets/css/core/`
  - Chứa CSS dùng chung cho toàn bộ website.

- `assets/css/layouts/`
  - Chứa CSS về bố cục và cấu trúc giao diện.

- `assets/js/effects/`
  - Chứa các hiệu ứng JavaScript.
  - Có thể mở rộng thêm:
    - `components/`
    - `utils/`
    - `services/`

