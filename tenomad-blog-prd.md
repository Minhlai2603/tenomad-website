## Problem Statement

The current Tenomad website needs a visual refresh and technical update. The goal is to rebuild the existing website as a modern, high-performance static website with significantly improved UX/UI, engaging animations, and interactive sliders. This redesign will better showcase the agency's software development services, portfolio, and company culture to prospective clients and employees.

## Solution

Create a new static website that mirrors the structure and content of the existing Tenomad website but elevates the visual design. The site will feature modern web aesthetics, smooth scroll animations, interactive sliders for portfolios and services, and a fully responsive layout. The language of the website will remain English. The architecture will be static to ensure blazing fast load times and enhanced security.

## User Stories

1. As a prospective client, I want to land on a visually stunning home page with an engaging hero slider, so that I am immediately impressed by the agency's modern technical capabilities.
2. As a prospective client, I want to navigate smoothly through the "Services" pages with micro-animations, so that the experience feels premium and I understand the full range of offerings (Web, Mobile, AI, Dedicated Teams, etc.).
3. As a prospective client, I want to view an interactive portfolio slider, so that I can easily browse through the agency's past projects and case studies without navigating away.
4. As a job seeker, I want to read the "Careers" and "About Us" pages with clear modern typography and engaging UI elements, so that I feel excited about joining the Tenomad team.
5. As a user on a mobile device, I want the website to be fully responsive, so that I can easily read content and contact the company on my phone.
6. As a website visitor, I want page transitions and content loading to be instantaneous, so that I have a frictionless browsing experience.
7. As a prospective client, I want to use a clear, beautifully styled contact form, so that I can easily reach out for project inquiries.
8. As a website administrator, I want the site to be fully static, so that hosting is simplified, secure, and SEO performance is maximized.

## Implementation Decisions

- **Architecture**: The website will be built as a purely static site. This ensures high performance, better SEO, and security.
- **Styling & Aesthetics**: Focus on rich aesthetics, vibrant color palettes, sleek modes, and dynamic micro-animations to create a premium feel. Avoid generic templates.
- **Interactivity & Animation**: Integrate smooth Javascript-based animations and sliders (e.g., Swiper.js for carousels, GSAP or CSS for scroll animations) for hero sections and portfolio displays.
- **Content Structure Details**: The site will replicate the existing core pages derived from the legacy site, with the following detailed requirements for each:
  - **Home**: The landing page designed to WOW the user. It will include:
    1. Dynamic Hero section with the slogan "You Dream It, We Build It" and subtitle "We are group of experts..."
    2. "Professional Approach" 3-column overview (Website Dev / Mobile Dev / Platform Dev)
    3. "What We Do Best" services slider (7 cards, tất cả dịch vụ)
    4. "Unlimited Possibilities / Powerful Solution" section with bullet list
    5. "Why Choose Us / Driven by Core Values" — 4 core values + counter (10+ years, 638+ projects, 598+ clients)
    6. "Why Work With Us" — 6 selling points grid
    7. Featured Portfolio work (3 highlighted projects)
    8. Testimonials carousel (3 client quotes)
    9. CTA split-screen (Careers + Contact)
  - **About Us**: Focuses on the company's 4 core values (Passion, Respect, Integrity, Excellence). It will feature a visually appealing grid showcasing the Management and Team members.
  - **Services**: A comprehensive section (or individual sub-pages) covering:
    - *Web Development*: Highlighting legacy experience, responsive design, and e-commerce capabilities.
    - *Mobile App Development*: Showcasing Native iOS and Android capabilities.
    - *Dedicated Team*: Emphasizing cost-effective, scalable developer resourcing.
    - *Startups*: Focus on outsourcing essential services to let founders focus on core products.
    - *QA Testing*: Detailing functional and smoke testing methodologies.
    - *Design*: UI/UX, motion graphics, and interactive multimedia.
    - *AI & NLP Consulting*: Highlighting chatbots, predictive models, and cost/revenue benefits.
  - **Portfolio / Case Studies**: An interactive gallery or carousel displaying the following 11 projects categorized by tags:
    - **Homing** (Design, Startup, Website): Real estate search engine mockup ("The Smarter Way Home").
    - **Dr. Berg** (Startup, Website): Keto & intermittent fasting membership website/app.
    - **Tago** (Mobile): Psychological counseling chatbot app (Dialogflow + Firebase).
    - **DMS** (Startup, Website, Mobile): Store management dashboard and app for Asim Telecom.
    - **Valley Sierra** (E-commerce, Website): Insurance inventory/property listing platform.
    - **Sqoop** (Mobile, Website): Dahappen social app (sqoop-app.com).
    - **Swolematch** (Hybrid App, Mobile, Website): Sport matching/signup app with barbell heart brand.
    - **Leed Pop** (Hybrid App, Mobile, Website): Lead generation posting app.
    - **XEKE** (Mobile, Website): Ride hailing & mapping mockup.
    - **My CalSigns** (Website): Custom sign manufacturer catalog site.
    - **Vespa Safari** (Website): Vespa tours website in Hue, Vietnam.
  - **Careers**: A recruitment hub listing open positions (Web Developer, Android Developer, Designer) with detailed job descriptions, requirements, and benefits (salary ranges, dynamic environment), along with an application CTA.
  - **Blog**: A static list/grid of technical and cultural articles (e.g., "The rise of the digital nomads") to boost SEO and establish thought leadership. Includes a blog post detail template for full article reading with sidebar navigation.
  - **Contact Us**: A sleek, accessible page featuring a beautifully styled contact form, the company address (Hue City), phone number, and email.
- **Language**: English.
- **Social Media**: Facebook, LinkedIn, Twitter/X (placeholder URLs).
- **Assets**: High-quality images and illustrations will be used. No generic placeholders.
- **Contact Form**: UI-only (no backend submission). Static site constraint.
- **"Apply Now" Buttons**: Link to /contact page.
- **"Let's Talk" Header CTA**: Link to /contact page.
- **Google Maps**: Static map image embed (no API key required).

## Technical Architecture

### Framework & Build
- **Framework:** Astro v5 (static site generator, zero JS by default)
- **Build tool:** Vite (built-in với Astro)
- **Package manager:** npm

### Styling
- **CSS:** Vanilla CSS với CSS Custom Properties (design tokens)
- **Methodology:** BEM naming convention

### Animation & Interaction
- **Scroll animations:** GSAP + ScrollTrigger
- **Sliders:** Swiper.js v11
- **Micro-interactions:** CSS transitions + GSAP

### Deployment
- **Target:** Vercel
- **Domain:** tenomad.com

## Sitemap & URL Structure

```
/                          → Homepage
/about-us                  → About Us (giới thiệu + ban lãnh đạo + nhân viên)
/services                  → Services Overview (danh sách dịch vụ)
/services/web-development  → Web Development
/services/mobile-app       → Mobile App Development
/services/dedicated-team   → Dedicated Team
/services/startups         → Startups
/services/qa-testing       → QA Testing
/services/design           → Design
/services/ai-nlp           → AI & NLP Consulting
/portfolio                 → Portfolio Gallery (dự án mẫu)
/careers                   → Careers (tuyển dụng)
/blog                      → Blog (tin tức / chia sẻ)
/contact                   → Contact Us (liên hệ)
```

## Responsive Strategy

### Breakpoints
- Mobile: < 768px
- Tablet: 768px – 1024px
- Desktop: > 1024px

### Mobile Navigation
- Hamburger menu icon (top-right)
- Full-screen slide-in drawer overlay (light background, large touch targets - 48px min)

### Mobile Adaptations
- Hero: Stacked layout, headline smaller (--text-3xl)
- Service slider: 1 card visible, swipe gesture enabled
- Portfolio grid: 1 column
- Team grid: 2 columns
- Stats counter: 2x2 grid instead of 1 row
- Contact: Form full-width, direct info cards stack below

### Touch Interactions
- Hover effects → tap-to-reveal on mobile
- Swipe gestures enabled for all sliders/carousels
- No heavy scroll parallax on mobile for optimal performance

## Testing Decisions

- **Testing Guidelines**: Tests should ensure visual consistency, performance, and cross-platform compatibility.
- **Modules to be Tested**:
  - UI Components (Sliders, Navigation Header, Forms).
  - Responsive Layouts (Mobile, Tablet, Desktop).
  - Animation Performance (Ensure 60fps animations without layout thrashing).
- **Prior Art**: Standard visual regression testing and Google Lighthouse for performance and SEO auditing on static marketing sites.

## Out of Scope

- E-commerce functionality (Shop, Cart, Checkout, My Account) found in the legacy site is out of scope for this static marketing rebuild.
- Dynamic backend systems (e.g., a real-time database or user authentication).

## Further Notes

- The detailed text content for the pages will be migrated from the existing WordPress REST API data extracted during the initial analysis phase.
- The design must wow the user at first glance, adhering strictly to modern web design best practices.
