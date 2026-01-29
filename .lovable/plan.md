

# Personal Portfolio Website Plan

## Overview
A modern, minimalist portfolio website for a **UI/UX Engineer, Frontend Developer & Designer** built with Vite, React, TypeScript, and Tailwind CSS. The design will be clean and typography-focused with generous whitespace, subtle scroll reveal animations, and a dark/light mode toggle.

---

## 🎨 Design Direction

**Visual Style:**
- Minimalist and clean aesthetic with strong typography hierarchy
- Generous whitespace and breathing room between sections
- Monochromatic color palette with one accent color
- Smooth, subtle scroll reveal animations for content
- Dark mode with inverted colors and adjusted contrasts

**Responsive Breakpoints:**
- Mobile (< 640px): Single column, hamburger navigation
- Tablet (640px - 1024px): Adaptive grid layouts
- Desktop (> 1024px): Full multi-column layouts

---

## 📱 Sections & Features

### 1. Navigation Header
- Hide-on-scroll behavior (appears when scrolling up)
- Logo/name on the left, nav links on the right
- Dark/light mode toggle button
- Hamburger menu for mobile with slide-out drawer
- Smooth scroll to sections on click

### 2. Hero Section
- Large display text with your name
- Animated role subtitle: "UI/UX Engineer | Frontend Developer | Designer"
- Short tagline about crafting beautiful, performant web experiences
- Two CTA buttons: "View Projects" (primary) and "Contact Me" (secondary)
- Clean, centered layout with subtle fade-in animation on load

### 3. About Section
- Professional introduction paragraph
- Highlight experience in frontend development and UI/UX design
- Key values: clean code, usability, performance, modern frameworks
- Optional: Professional photo placeholder

### 4. Skills Section
- Organized into categories:
  - **Frontend:** React, TypeScript, JavaScript, HTML, CSS, Tailwind, SCSS
  - **UI/UX:** Figma, Wireframing, Prototyping, Design Systems
  - **Tools:** Git, Vite, Firebase, REST APIs
- Visual display using clean skill cards with icons
- Subtle hover effects on cards

### 5. Services Section
- Grid of service cards (2-3 columns on desktop)
- Each card includes:
  - Icon representation
  - Service title
  - Brief description
- Services: UI/UX Design, Frontend Development, Web App Development, Responsive Design, Performance Optimization

### 6. Projects Section
- Responsive grid layout (1/2/3 columns based on screen size)
- 4-6 placeholder project cards
- Each card shows:
  - Project thumbnail/preview image placeholder
  - Title
  - Brief description
  - Tech stack tags
  - "Live Demo" and "GitHub" buttons
- Hover effect with subtle lift/shadow

### 7. Contact Section
- Clean contact form with fields:
  - Name (required)
  - Email (required, with validation)
  - Message (required)
  - Submit button
- Client-side validation with error messages
- Success toast notification on submit
- Display email address for direct contact

### 8. Footer / Social Links
- Social media icons with links:
  - GitHub
  - LinkedIn
  - Twitter/X
  - Email
- Copyright text
- Smooth hover effects on icons

---

## 🛠 Technical Implementation

**Component Architecture:**
- `components/layout/` - Header, Footer, Layout wrapper
- `components/sections/` - Hero, About, Skills, Services, Projects, Contact
- `components/ui/` - Buttons, Cards, Form inputs (using existing shadcn)
- `hooks/` - useScrollDirection, useTheme, useInView (for animations)

**Key Features:**
- Dark/light theme using next-themes (already installed)
- Smooth scrolling navigation
- Scroll reveal animations using Intersection Observer
- Form validation with react-hook-form + zod
- Fully responsive with Tailwind breakpoints
- Type-safe props throughout
- Lucide icons for consistent iconography

**SEO & Performance:**
- Semantic HTML structure (proper heading hierarchy)
- Optimized meta tags in index.html
- Lazy loading for images
- Clean, accessible markup

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/ (existing shadcn components)
├── hooks/
│   ├── useScrollDirection.ts
│   └── useInView.ts
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── services.ts
├── pages/
│   └── Index.tsx
└── index.css
```

---

## ✨ Deliverables

1. Complete single-page portfolio with all 8 sections
2. Fully responsive design (mobile, tablet, desktop)
3. Dark/light mode toggle with persisted preference
4. Hide-on-scroll navigation with mobile hamburger menu
5. Scroll reveal animations for sections
6. Validated contact form (visual only, ready for backend integration)
7. Placeholder content easily replaceable with your information
8. Clean, maintainable component structure

