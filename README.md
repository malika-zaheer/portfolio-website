🚀 Malika Zaheer — Personal Portfolio Website
A modern, responsive, and fully interactive personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks — just clean, professional code.




✨ Live Demo
🌐 View Live: [Your GitHub Pages Link Will Go Here]
📸 Preview
Table
Hero Section	Projects Section	Contact Form
🛠️ Built With
HTML5 — Semantic markup with accessibility in mind
CSS3 — Custom properties, Flexbox, CSS Grid, animations
JavaScript (Vanilla) — No frameworks, pure JS functionality
Font Awesome — Icons
Google Fonts — Inter & Playfair Display typography
🎯 Features
🎨 Design & Layout
✅ Dark/Light Mode Toggle — Theme preference saved via localStorage
✅ Fully Responsive — Optimized for mobile (≤480px), tablet (≤768px), and desktop (≥1024px)
✅ Animated Hero Section — Gradient pulse animation + floating particles
✅ Typing Animation — Auto-typing name effect in the hero
✅ Scroll Animations — Elements fade/slide in using Intersection Observer API
🔧 Interactive Components
✅ Live Project Search — Real-time filtering of projects by name, tech, or description
✅ Skills Table Sorting — Sort by name or proficiency level (ascending/descending)
✅ Image Gallery Lightbox — Click to enlarge with prev/next navigation & keyboard support
✅ Contact Form Validation — Real-time validation with styled error/success messages
✅ Animated Skill Bars — Progress bars animate when scrolled into view
✅ Animated Counters — Stats count up with easing animation
✅ Smooth Scroll Navigation — All anchor links scroll smoothly
✅ Back to Top Button — Appears after scrolling down
🌐 Web APIs Used
Table
API	Purpose
localStorage	Saves Dark/Light theme preference
Geolocation	Fetches user's geographic location
Intersection Observer	Triggers scroll-based animations
Fetch	Simulates async form submission
📁 Project Structure
plain
Copy
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
🚀 Getting Started
1. Clone the Repository
bash
Copy
git clone https://github.com/malika-zaheer/portfolio-website.git
cd portfolio-website
2. Open Locally
Simply open index.html in your browser:
bash
Copy
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
Or use a live server (recommended):
bash
Copy
# Using VS Code Live Server extension
# Or Python simple server:
python -m http.server 8000
# Then visit: http://localhost:8000
📱 Responsive Breakpoints
Table
Device	Width	Layout
Mobile	≤480px	Single column, stacked sections
Tablet	≤768px	2-column grids, hamburger menu
Desktop	≥1024px	Full layout, 3-column projects
Large Desktop	≥1440px	Max-width container, larger spacing
🎨 Customization Guide
Change Personal Information
Edit these sections in index.html:
Name — Hero title, navbar logo, footer
Bio — About section paragraphs
Email — Contact form and footer links
Social Links — GitHub, LinkedIn, Twitter URLs
Location — Hero subtitle, contact info
Education — University and degree info
Change Colors
Edit CSS Custom Properties in style.css:
css
Copy
:root {
    --primary: #a855f7;        /* Main brand color */
    --secondary: #22d3ee;     /* Accent color */
    --accent: #f472b6;          /* Highlight color */
    /* ... more variables */
}
Add/Edit Projects
Edit the projectsData array in script.js:
JavaScript
Copy
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
Add/Edit Skills
Edit the skillsData array in script.js:
JavaScript
Copy
const skillsData = [
    { name: 'Your Skill', category: 'Category', proficiency: 'Advanced', level: 3 },
    // level: 1=Beginner, 2=Intermediate, 3=Advanced
];
Add Gallery Images
Edit the galleryData array in script.js:
JavaScript
Copy
const galleryData = [
    { src: 'path/to/image.jpg', title: 'Image Title', category: 'Category' },
];
📊 Performance
✅ No external frameworks — Lightweight, fast loading
✅ Lazy loading images — loading="lazy" on all images
✅ Optimized animations — CSS transforms for 60fps performance
✅ Minimal dependencies — Only Font Awesome & Google Fonts
🔒 License
This project is licensed under the MIT License — feel free to use it as a template for your own portfolio.
plain
Copy
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
👩‍💻 Author
Malika Zaheer
🎓 BS Software Engineering, University of Gujrat, Pakistan
💼 Freelance WordPress Developer & Graphic Designer
📍 Gujrat, Pakistan
Connect With Me
https://github.com/malika-zaheer
https://www.linkedin.com/in/malika-zaheer-356811387
https://x.com/mali_ka535
mailto:malikazaheer@gmail.com
🙏 Acknowledgments
Font Awesome for icons
Google Fonts for typography
Unsplash for placeholder images
⭐ Star this repo if you found it helpful! Feel free to fork and customize it for your own portfolio.
Built with ❤️ by Malika Zaheer
