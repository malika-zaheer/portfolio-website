# 🚀 Malika Zaheer — Personal Portfolio Website

> A modern, responsive, and fully interactive personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks — just clean, professional code.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()
[![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=flat)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat)]()

---

## ✨ Live Demo

🌐 **View Live:** [Your GitHub Pages Link Will Go Here]

---

## 📸 Preview

| Hero Section | Projects Section | Contact Form |
|:---:|:---:|:---:|
| ![Hero](https://via.placeholder.com/300x200/0f0f1a/a855f7?text=Hero+Section) | ![Projects](https://via.placeholder.com/300x200/0f0f1a/22d3ee?text=Projects) | ![Contact](https://via.placeholder.com/300x200/0f0f1a/f472b6?text=Contact) |

---

## 🛠️ Built With

- **HTML5** — Semantic markup with accessibility in mind
- **CSS3** — Custom properties, Flexbox, CSS Grid, animations
- **JavaScript (Vanilla)** — No frameworks, pure JS functionality
- **Font Awesome** — Icons
- **Google Fonts** — Inter & Playfair Display typography

---

## 🎯 Features

### 🎨 Design & Layout
- ✅ **Dark/Light Mode Toggle** — Theme preference saved via `localStorage`
- ✅ **Fully Responsive** — Optimized for mobile (≤480px), tablet (≤768px), and desktop (≥1024px)
- ✅ **Animated Hero Section** — Gradient pulse animation + floating particles
- ✅ **Typing Animation** — Auto-typing name effect in the hero
- ✅ **Scroll Animations** — Elements fade/slide in using Intersection Observer API

### 🔧 Interactive Components
- ✅ **Live Project Search** — Real-time filtering of projects by name, tech, or description
- ✅ **Skills Table Sorting** — Sort by name or proficiency level (ascending/descending)
- ✅ **Image Gallery Lightbox** — Click to enlarge with prev/next navigation & keyboard support
- ✅ **Contact Form Validation** — Real-time validation with styled error/success messages
- ✅ **Animated Skill Bars** — Progress bars animate when scrolled into view
- ✅ **Animated Counters** — Stats count up with easing animation
- ✅ **Smooth Scroll Navigation** — All anchor links scroll smoothly
- ✅ **Back to Top Button** — Appears after scrolling down

### 🌐 Web APIs Used
| API | Purpose |
|-----|---------|
| `localStorage` | Saves Dark/Light theme preference |
| `Geolocation` | Fetches user's geographic location |
| `Intersection Observer` | Triggers scroll-based animations |
| `Fetch` | Simulates async form submission |

---

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file (semantic structure)
├── style.css           # Complete stylesheet (variables, animations, responsive)
├── script.js           # All JavaScript functionality
├── README.md           # This file
│
└── (Optional)
    ├── /assets         # Images, screenshots, resume PDF
    └── /docs           # Additional documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/malika-zaheer/portfolio-website.git
cd portfolio-website
```

### 2. Open Locally
Simply open `index.html` in your browser:
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

Or use a live server (recommended):
```bash
# Using VS Code Live Server extension
# Or Python simple server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | ≤480px | Single column, stacked sections |
| Tablet | ≤768px | 2-column grids, hamburger menu |
| Desktop | ≥1024px | Full layout, 3-column projects |
| Large Desktop | ≥1440px | Max-width container, larger spacing |

---

## 🎨 Customization Guide

### Change Personal Information
Edit these sections in `index.html`:
- **Name** — Hero title, navbar logo, footer
- **Bio** — About section paragraphs
- **Email** — Contact form and footer links
- **Social Links** — GitHub, LinkedIn, Twitter URLs
- **Location** — Hero subtitle, contact info
- **Education** — University and degree info

### Change Colors
Edit CSS Custom Properties in `style.css`:
```css
:root {
    --primary: #a855f7;        /* Main brand color */
    --secondary: #22d3ee;     /* Accent color */
    --accent: #f472b6;          /* Highlight color */
    /* ... more variables */
}
```

### Add/Edit Projects
Edit the `projectsData` array in `script.js`:
```javascript
const projectsData = [
    {
        id: 1,
        name: 'Your Project Name',
        description: 'Project description here...',
        tags: ['wordpress', 'web'],
        technologies: ['WordPress', 'CSS', 'JavaScript'],
        image: 'path/to/image.jpg',
        github: 'https://github.com/your-repo',
        live: 'https://your-live-site.com',
        category: 'wordpress'
    },
    // Add more projects...
];
```

### Add/Edit Skills
Edit the `skillsData` array in `script.js`:
```javascript
const skillsData = [
    { name: 'Your Skill', category: 'Category', proficiency: 'Advanced', level: 3 },
    // level: 1=Beginner, 2=Intermediate, 3=Advanced
];
```

### Add Gallery Images
Edit the `galleryData` array in `script.js`:
```javascript
const galleryData = [
    { src: 'path/to/image.jpg', title: 'Image Title', category: 'Category' },
];
```

---

## 📊 Performance

- ✅ **No external frameworks** — Lightweight, fast loading
- ✅ **Lazy loading images** — `loading="lazy"` on all images
- ✅ **Optimized animations** — CSS transforms for 60fps performance
- ✅ **Minimal dependencies** — Only Font Awesome & Google Fonts

---

## 🔒 License

This project is licensed under the **MIT License** — feel free to use it as a template for your own portfolio.

```
MIT License

Copyright (c) 2025 Malika Zaheer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👩‍💻 Author

**Malika Zaheer**

- 🎓 BS Software Engineering, University of Gujrat, Pakistan
- 💼 Freelance WordPress Developer & Graphic Designer
- 📍 Gujrat, Pakistan

### Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/malika-zaheer)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/malika-zaheer-356811387)
[![Twitter/X](https://img.shields.io/badge/Twitter-000000?style=flat&logo=x)](https://x.com/mali_ka535)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail)](mailto:malikazaheer@gmail.com)

---

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for placeholder images

---

> ⭐ **Star this repo** if you found it helpful! Feel free to fork and customize it for your own portfolio.

**Built with ❤️ by Malika Zaheer**
