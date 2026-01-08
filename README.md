# Dự án kiểm tra EQ trực tuyến

Ứng dụng web giúp người dùng thực hiện bài trắc nghiệm EQ và nhận đánh giá trực quan về trí tuệ cảm xúc. Giao diện tối ưu cho thiết bị di động, dùng nền tảng React hiện đại kết hợp nhiều hiệu ứng chuyển động.

## Công nghệ chính

- **React 19 + React DOM 19**: Xây dựng giao diện thành phần, quản lý state với hooks (`useState`, `useEffect`, `useRef`).
- **Vite 7**: Công cụ build và dev server với HMR, cấu hình tối giản.
- **Framer Motion 12**: Tạo animation cho toàn bộ trang (chuyển trang, hover, button, confetti trigger).
- **React Confetti**: Hiệu ứng chúc mừng theo điều kiện điểm số cao.
- **ESLint 9** với cấu hình React Hooks/Refresh để giữ code chuẩn.
- **PostCSS**: Hỗ trợ xử lý CSS hiện đại trong quy trình build.

## Kiến trúc & quản lý state

- **Phân tách component** theo chức năng: trang chủ, bài trắc nghiệm, trang kiến thức, trang kết quả...
- **Lưu tiến độ làm bài** trong `localStorage` (`QUIZ_STORAGE_KEY`) để người dùng quay lại không mất dữ liệu.
- **Đếm ngược thời gian** dựa trên timestamp `endTimeMs`, đảm bảo đồng bộ sau khi refresh.
- **Google Apps Script integration**: gửi kết quả lên Google Sheet qua `fetch` chế độ `no-cors`.

## Kỹ thuật giao diện nổi bật

- **Gradient động và animation clamp**: dùng CSS `background-size`, `animation` và giá trị `clamp()` để thích ứng đa màn hình.
- **Glassmorphism cards**: sử dụng `backdrop-filter`, border mờ tạo cảm giác hiện đại.
- **Responsive layout**: phối hợp Tailwind utility class (qua `className`) với CSS thuần trong `App.css` để bảo toàn màu sắc thương hiệu (#F8B5C1, #F8D0D2, #EFF2F8, #2B92E4).
- **Framer Motion**: chuyển cảnh câu hỏi, nhấn nút, confetti, animated divider, list stagger.
- **Confetti trigger**: hook `useEffect` bật confetti khi điểm >= 161 và tự tắt sau 5 giây.
- **Điều hướng câu hỏi**: các nút gradient, trạng thái disable, animation scale khi hover.

## Tổ chức mã nguồn

- `src/components/` chứa component React từng trang và phần tái sử dụng.
- `src/data/questions.js` định nghĩa câu hỏi và thang điểm.
- `src/App.css` và `src/index.css` quản lý theme, hiệu ứng gradient tùy chỉnh.
- `public/` chứa asset tĩnh (hình ảnh chủ đề EQ).

## Chất lượng & build

```bash
# Development
npm install
npm run dev

# Kiểm tra lint
npm run lint

# Build production
npm run build
```

Build output được Vite tạo trong thư mục `dist/`. Có thể chạy `npm run preview` để kiểm tra bản build.

## Định hướng mở rộng

- Thêm biểu đồ trực quan cho lịch sử điểm EQ (dùng Chart.js).
- Đồng bộ hóa dữ liệu người dùng qua API thay vì Google Sheet.
- Tích hợp PWA để hoạt động offline.
- Bổ sung đa ngôn ngữ cho câu hỏi và phần hướng dẫn.

Tài liệu này cung cấp bức tranh tổng quan về công nghệ và kỹ thuật đã áp dụng để bảo trì, mở rộng dự án thuận lợi hơn.
