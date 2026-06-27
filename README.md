# Cấu Trúc Thư Mục Dự Án CyberCorpVision

> Tài liệu mô tả tổ chức thư mục và mục đích từng thành phần trong dự án CyberCorpVision.

---

## Tổng Quan

Dự án **CyberCorpVision** được tổ chức thành 3 nhóm thư mục chính:

- `analytics/` — Tài liệu phân tích, sơ đồ thiết kế
- `assets/` — Tài nguyên giao diện (CSS, ảnh, JS)
- `pages/` — Các trang HTML hoàn chỉnh

---

## Bảng Cấu Trúc Thư Mục

| Thư Mục | Mục Đích |
|---|---|
| `CyberCorpVision/` | Thư mục gốc của dự án, chứa toàn bộ tài sản, phân tích và trang web |
| `CyberCorpVision/analytics/` | Chứa tài liệu phân tích, sơ đồ và ghi chú về dự án |
| `CyberCorpVision/analytics/draw.io/` | Lưu các sơ đồ thiết kế dự án ở định dạng draw.io |
| `CyberCorpVision/analytics/task/` | Lưu nhiệm vụ hoặc ghi chú công việc của dự án *(hiện trống)* |
| `CyberCorpVision/assets/` | Chứa toàn bộ tài nguyên giao diện: CSS, ảnh và JavaScript |
| `CyberCorpVision/assets/css/` | Chứa các tệp CSS để định dạng giao diện và bố cục |
| `CyberCorpVision/assets/css/core/` | Chứa CSS cốt lõi dùng chung cho giao diện |
| `CyberCorpVision/assets/css/layouts/` | Chứa CSS cho cấu trúc và bố cục trang |
| `CyberCorpVision/assets/img/` | Chứa hình ảnh dùng trong các trang và phần hiển thị |
| `CyberCorpVision/assets/img/about/` | Chứa ảnh liên quan tới trang About |
| `CyberCorpVision/assets/img/home/` | Chứa ảnh liên quan tới trang Home |
| `CyberCorpVision/assets/img/service/` | Chứa ảnh liên quan tới trang Service |
| `CyberCorpVision/assets/js/` | Chứa tập lệnh JavaScript cho tương tác trang |
| `CyberCorpVision/assets/js/effects/` | Chứa mã JavaScript tạo hiệu ứng bổ sung |
| `CyberCorpVision/pages/` | Chứa các trang HTML hoàn chỉnh của dự án |

---

## Sơ Đồ Cây Thư Mục

```
CyberCorpVision/
├── analytics/
│   ├── draw.io/        ← Sơ đồ thiết kế (.drawio)
│   └── task/           ← Ghi chú công việc (trống)
├── assets/
│   ├── css/
│   │   ├── core/       ← CSS dùng chung
│   │   └── layouts/    ← CSS bố cục trang
│   ├── img/
│   │   ├── about/      ← Ảnh trang About
│   │   ├── home/       ← Ảnh trang Home
│   │   └── service/    ← Ảnh trang Service
│   └── js/
│       └── effects/    ← JS hiệu ứng bổ sung
└── pages/              ← Trang HTML hoàn chỉnh
```

---

*Tài liệu này phản ánh cấu trúc thư mục tại thời điểm khởi tạo dự án. Cập nhật khi có thêm thư mục mới.*
