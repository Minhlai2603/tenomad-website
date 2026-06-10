# Tenomad Website Wireframe & Concept

Đây là cấu trúc thiết kế (Wireframe) dành cho trang chủ và bộ khung chung của website Tenomad, được thiết kế theo phong cách hiện đại, ưu tiên trải nghiệm cuộn mượt mà (smooth scrolling) và các hiệu ứng động (animations) sang trọng.

## 🎨 Visual Concept (Bản nháp giao diện)
Dưới đây là một bản phác họa (mockup) giao diện mẫu với thiết kế "Dark mode", hiệu ứng kính mờ (glassmorphism) và gam màu neon làm điểm nhấn.

*(Lưu ý: Ảnh phác họa nằm ở file đính kèm trong mục Artifacts của trợ lý AI)*

---

## 📐 Cấu trúc Wireframe (Trang chủ)

### 1. Global Header (Thanh điều hướng)
*Trạng thái: Cố định (Sticky/Glassmorphism) khi cuộn chuột*
- **[Left]** Logo `Tenomad`
- **[Center]** Navigation Links (Hiệu ứng hover underline mượt mà):
  - Home
  - Services (Dropdown menu thả xuống)
  - Portfolio
  - About Us
  - Careers
  - Blog
- **[Right]** Nút Call to Action (CTA) nổi bật: `[ Let's Talk ]` (Hiệu ứng hover phát sáng)

### 2. Section 1: Hero Area (Khu vực thu hút ánh nhìn đầu tiên)
*Hiệu ứng: Nền mờ ảo (blur gradient) chuyển động chậm, Text xuất hiện với hiệu ứng Fade-up từ dưới lên*
- **Headline lớn:** "You Dream It, We Build It."
- **Sub-headline:** "We are group of experts that will help you bring your ideas to life. Let's create something great together!"
- **Primary CTA:** `[ Explore Our Services ]` 
- **Secondary CTA:** `[ View Portfolio ]`
- **Visual/Animation:** Khối hình khối 3D hoặc đồ họa minh họa lập trình tĩnh cách điệu ở bên phải màn hình (giống như ảnh Concept phía trên).

### 3. Section 2: Core Services (Thanh trượt Dịch vụ - Slider)
*Hiệu ứng: Slider kéo ngang (Draggable Carousel) với GSAP/Swiper*
- **Tiêu đề Section:** "What We Do Best"
- **Interactive Slider Container:** 
  - Thẻ 1: [Icon Web] **Web Development** - Responsive, e-Commerce, Web Apps...
  - Thẻ 2: [Icon Mobile] **Mobile App Development** - iOS, Android, React Native...
  - Thẻ 3: [Icon Team] **Dedicated Team** - Scale up your operations...
  - Thẻ 4: [Icon Startup] **Startups** - Outsource non-core tasks...
  - Thẻ 5: [Icon QA] **QA Testing** - Functional & Smoke Testing...
  - Thẻ 6: [Icon Design] **Design** - UI/UX, Motion Graphics...
  - Thẻ 7: [Icon AI] **AI & NLP Consulting** - Chatbots, Predictive Models...
  *(Mỗi thẻ khi đưa chuột vào (hover) sẽ phóng to nhẹ, nổi lền và đổi màu viền dạng kính)*

### 4. Section 3: Why Choose Us (Thông số & Điểm mạnh)
*Hiệu ứng: Số đếm (Counter Animation) chạy nhanh dần từ 0 khi người dùng cuộn tới.*
- **Tiêu đề:** "Driven by Core Values"
- **4 Cột giá trị:** Passion | Respect | Integrity | Excellence
- **Thống kê:**
  - `[ 10+ ]` Years of Experience
  - `[ 638+ ]` Projects Completed
  - `[ 598+ ]` Happy Clients

### 5. Section 4: Portfolio Showcase (Dự án nổi bật)
*Hiệu ứng: Hình ảnh Parallax nhẹ nhàng khi cuộn chuột.*
- **Tiêu đề:** "Our Featured Work"
- **Lưới dự án (Grid/Slider):**
  - Card 1: **Tago** (Tư vấn tâm lý, Chatbot, Firebase) + Nút `[ View Case Study ]`
  - Card 2: **Valley Sierra** (Bảo hiểm) + Nút `[ View Case Study ]`
  - Card 3: **DMS** (Ứng dụng quản lý cửa hàng) + Nút `[ View Case Study ]`

### 6. Section 5: Professional Approach (3 cột)
*Hiệu ứng: Fade-in staggered khi cuộn tới*
- **Tiêu đề:** "Professional Approach To Realization Of All Your Great Ideas"
- **Subtitle:** "To work with our clients to identify real business opportunities..."
- **3 Cột:**
  - Cột 1: **WEBSITE DEVELOPMENT** — "A simple to-go solution for many businesses..."
  - Cột 2: **MOBILE DEVELOPMENT** — "Our versatile experience in offshore mobile app development..."
  - Cột 3: **PLATFORM DEVELOPMENT** — "Today's applications are not standalone apps..."

### 7. Section 6: Unlimited Possibilities
*Hiệu ứng: Icon list slide-in từ trái*
- **Tiêu đề:** "Unlimited Possibilities / Powerful Solution"
- **Subtitle:** "To work with our clients to identify real business opportunities..."
- **Bullet List:** Web Development, Mobile App Development, Startups, Quality Assurance, Dedicated Teams
- **Visual:** Ảnh minh họa hoặc đồ họa abstract bên phải

### 8. Section 7: Why Work With Us
*Hiệu ứng: Cards stagger fade-in*
- **Tiêu đề:** "WHY WORK WITH US"
- **Sub-heading:** "You're not here because we're the best, You are here because we're doing our best for you."
- **6 Items Grid (3x2):** Industry Experience – 10 years | Brilliant Team | Creative & Professional | Complex Solutions | 100% Result Guarantee | Affordable Budget

### 9. Section 8: Testimonials
*Hiệu ứng: Slider/Carousel tự động chạy với fade transition*
- **Tiêu đề:** "What Our Clients Say"
- **3 Slides:**
  - Slide 1: Sandy Frucher – Vice Chairman of the Nasdaq (LTVtrade™ quote)
  - Slide 2: Christine DiCarlo – Broker of Reméo Realty (photography quote)
  - Slide 3: Zarley Zalapski – Founder, Peek in Tours (salespitch quote)

### 10. Section 9: Call to Action (Tuyển dụng & Liên hệ)
*Hiệu ứng: Mảng nền tối (Dark background) với ánh sáng Neon bắt mắt.*
- Phân đôi màn hình (Split screen layout):
  - **Left (Careers):** "Ready to join our dynamic team?" -> Nút: `[ View Open Positions ]`
  - **Right (Contact):** "Have a project in mind?" -> Nút: `[ Contact Us Today ]`

---

## 4. Global Footer (Chân trang)
- **Cột 1 (Về công ty):** Logo + "You Dream It, We Build It."
- **Cột 2 (Links nhanh):** Home, About Us, Services, Portfolio, Careers
- **Cột 3 (Liên hệ):** 
  - Địa chỉ: 26 Ly Thuong Kiet Street, Hue City
  - Phone: (+84)02346 27 17 57
  - Email: contact@tenomad.com
- **Bottom Bar:** Bản quyền (Copyright) & Các icon mạng xã hội.

---

## 📐 Cấu trúc Wireframe (Trang Con - Subpages)

### 1. About Us Page (Về chúng tôi)
- **Hero Banner:** Tiêu đề lớn "We translate Our Clients Dreams Into Reality", nền overlay nhẹ trên ảnh văn phòng.
- **Mission & Vision Cards:** Cột 3 thẻ ngang (Mission | Vision | Affordable Dev) với background màu `--bg-secondary` và hiệu ứng hover đổi màu border.
- **Core Values Grid:** Lưới 2x2 hiển thị 4 giá trị cốt lõi: Passion, Respect, Integrity, Excellence. Mỗi thẻ có icon SVG và nội dung diễn giải.
- **Management Section:** Danh sách ban lãnh đạo (Andrew, Jack, Jennifer, etc.) hiển thị theo dạng Card ngang hoặc dọc. Mỗi Card gồm: Ảnh đại diện (placeholder) + Tên + Chức danh + Đoạn giới thiệu ngắn.
- **Team Grid:** Lưới 5 cột hiển thị ảnh đại diện tròn của ~30 nhân viên với Tên + Chức danh bên dưới.

### 2. Services Overview Page (Danh sách Dịch vụ)
- **Hero:** "Professional Approach To Realization Of All Your Great Ideas"
- **Services Grid:** Lưới 2 cột (hoặc 3 cột trên desktop) hiển thị 7 thẻ dịch vụ (Web, Mobile, Dedicated Team, Startups, QA, Design, AI & NLP).
  - *Mỗi thẻ:* Icon SVG + Tiêu đề dịch vụ + Một đoạn mô tả ngắn + Link "Learn More →" dẫn đến trang chi tiết.
- **Services Framework Section:** 3 cột ngang giới thiệu quy trình làm việc (Proactive Analysis, Lean Development, Continuous Delivery).
- **CTA:** Nút "Start Your Project" ở cuối trang.

### 3. Service Detail Template (Trang chi tiết Dịch vụ)
- **Breadcrumb:** Điều hướng phân cấp (Home > Services > [Tên dịch vụ])
- **Hero:** Tên dịch vụ + Mô tả ngắn + Ảnh minh họa đồ họa tương ứng.
- **Split Layout:**
  - *Left (Sidebar):* Menu danh sách liên kết nhanh đến các dịch vụ khác (để chuyển trang nhanh).
  - *Right (Main Content):* Nội dung chi tiết của dịch vụ (các đoạn văn bản, danh sách đặc điểm kỹ thuật, các công nghệ sử dụng).
- **Related Projects:** Carousel hiển thị 2-3 dự án liên quan nằm trong danh mục Portfolio.
- **CTA Section:** "Have a project? Let's design it together." -> Form liên hệ nhanh.

### 4. Portfolio Page (Danh sách Dự án)
- **Hero:** Tiêu đề "Our Featured Work" + Slogan giới thiệu ngắn.
- **Filter Tabs:** Dải tab ngang để lọc dự án (All | Design | Website | Mobile | Startup | E-commerce | Hybrid App).
- **Project Grid:** Lưới 3 cột hiển thị 11 dự án.
  - *Mỗi card:* Thumbnail dự án + Tiêu đề dự án + Danh sách các tag phân loại. Hover vào sẽ xuất hiện overlay màu `--accent-indigo` và nút "View Detail".
- **Pagination:** Nút chuyển trang ở dưới nếu số lượng dự án tăng lên.

### 5. Careers Page (Tuyển dụng)
- **Hero:** "Join Our Dynamic Team"
- **Benefits Section:** Lưới các icon giới thiệu chế độ đãi ngộ (Lương thưởng, BHXH đầy đủ, Môi trường làm việc năng động).
- **Open Positions List:** Danh sách các vị trí tuyển dụng (Web Developer, Android Developer, Designer).
  - *Mỗi vị trí:* Dạng accordion card (click để mở rộng). Hiển thị: Tiêu đề công việc + Số lượng + Mức lương + Yêu cầu + Quyền lợi + Nút "Apply Now" (mở form hoặc email tuyển dụng).

### 6. Blog Page (Tin tức)
- **Hero:** "Insights & Articles"
- **Split Layout:**
  - *Left (Main Grid):* Lưới 2 cột hiển thị danh sách 4 bài viết. Mỗi bài viết gồm: Ảnh thumbnail + Tiêu đề + Ngày đăng + Đoạn trích dẫn ngắn + Nút "Read Article".
  - *Right (Sidebar):* Ô tìm kiếm bài viết, danh mục bài viết và danh sách các bài viết gần đây.

### 6b. Blog Post Detail Template (Trang chi tiết bài viết)
- **Breadcrumb:** Home > Blog > [Tiêu đề bài viết]
- **Hero:** Ảnh thumbnail full-width + Tiêu đề bài viết + Ngày đăng
- **Content Layout:**
  - *Main (Left, ~70%):* Nội dung bài viết full text (từ CONTENT.md), hỗ trợ headings, bảng, code blocks, lists.
  - *Sidebar (Right, ~30%):* Ô tìm kiếm, Danh mục, Các bài viết gần đây.
- **Bottom:** Nút "← Back to Blog" + Related posts (2-3 bài khác).

### 7. Contact Us Page (Liên hệ)
- **Hero:** "Need Help? Say Hello."
- **Split Layout:**
  - *Left:* Form liên hệ (Họ tên, Điện thoại, Email, Tiêu đề, Tin nhắn, Nút gửi).
  - *Right:* Thông tin liên hệ trực tiếp (Địa chỉ: 26 Ly Thuong Kiet St, SĐT, Email liên hệ, Link mạng xã hội).
- **Map Section:** Ảnh bản đồ tĩnh (Static map image) hiển thị khu vực 26 Ly Thuong Kiet, Hue City.

