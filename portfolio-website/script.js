/* ============================================
   MALIKA ZAHEER PORTFOLIO - SCRIPT.JS
   ============================================ */

// ===== DATA =====
const skillsData = [
    { name: 'HTML & CSS', category: 'Frontend', proficiency: 'Advanced', level: 3 },
    { name: 'JavaScript', category: 'Frontend', proficiency: 'Intermediate', level: 2 },
    { name: 'WordPress', category: 'CMS', proficiency: 'Advanced', level: 3 },
    { name: 'Python', category: 'Backend', proficiency: 'Intermediate', level: 2 },
    { name: 'C++', category: 'Programming', proficiency: 'Intermediate', level: 2 },
    { name: 'Java', category: 'Programming', proficiency: 'Intermediate', level: 2 },
    { name: 'C', category: 'Programming', proficiency: 'Intermediate', level: 2 },
    { name: 'MySQL', category: 'Database', proficiency: 'Intermediate', level: 2 },
    { name: 'Data Structures', category: 'Computer Science', proficiency: 'Intermediate', level: 2 },
    { name: 'Object Oriented Programming', category: 'Computer Science', proficiency: 'Intermediate', level: 2 },
    { name: 'Apache NetBeans', category: 'IDE', proficiency: 'Intermediate', level: 2 },
    { name: 'Graphic Design', category: 'Design', proficiency: 'Advanced', level: 3 },
    { name: 'UI/UX Design', category: 'Design', proficiency: 'Intermediate', level: 2 },
    { name: 'Git & GitHub', category: 'Tools', proficiency: 'Beginner', level: 1 },
    { name: 'Responsive Design', category: 'Frontend', proficiency: 'Advanced', level: 3 },
];

const projectsData = [
    {
        id: 1,
        name: 'YourLaunch.co Website',
        description: 'A professional WordPress website for a web development agency featuring modern design, responsive layout, pricing plans, FAQ section, and contact forms. Built with Elementor for high conversion rates.',
        tags: ['wordpress', 'elementor', 'web'],
        technologies: ['WordPress', 'Elementor', 'CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        github: null,
        live: '#',
        category: 'wordpress'
    },
    {
        id: 2,
        name: 'AroojFatima.co Portfolio',
        description: 'A digital marketing specialist portfolio website with elegant dark theme, service showcases, client testimonials, and resource sections. Features smooth animations and professional branding.',
        tags: ['wordpress', 'web', 'design'],
        technologies: ['WordPress', 'Elementor', 'Custom CSS', 'SEO'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        github: null,
        live: '#',
        category: 'wordpress'
    },
    {
        id: 3,
        name: 'Learning Management System',
        description: 'A complete Java-based Learning Management System with login/signup functionality, user authentication, password management, and student dashboard. Built using Apache NetBeans with Swing GUI.',
        tags: ['java', 'netbeans', 'desktop'],
        technologies: ['Java', 'Apache NetBeans', 'Swing', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
        github: 'https://github.com/malika-zaheer',
        live: null,
        category: 'java'
    },
    {
        id: 4,
        name: 'E-Commerce Store',
        description: 'A fully functional WordPress e-commerce website with WooCommerce integration, product catalogs, shopping cart, payment gateway, and responsive design for optimal mobile experience.',
        tags: ['wordpress', 'web', 'ecommerce'],
        technologies: ['WordPress', 'WooCommerce', 'PHP', 'CSS'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        github: null,
        live: '#',
        category: 'wordpress'
    },
    {
        id: 5,
        name: 'Brand Identity Design',
        description: 'Complete brand identity package including logo design, color palette, typography guidelines, business cards, and social media templates for multiple clients.',
        tags: ['design', 'branding', 'graphic'],
        technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva'],
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
        github: null,
        live: '#',
        category: 'design'
    },
    {
        id: 6,
        name: 'Portfolio Website Template',
        description: 'A customizable portfolio website template built with HTML, CSS, and JavaScript. Features dark/light mode, smooth animations, responsive design, and modern UI components.',
        tags: ['web', 'frontend', 'javascript'],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
        image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
        github: 'https://github.com/malika-zaheer',
        live: '#',
        category: 'web'
    }
];

const galleryData = [
    { src: 'Screenshot (27).png', title: 'YourLaunch.co - Agency Website', category: 'WordPress' },
    { src: 'Screenshot (26).png', title: 'AroojFatima.co - Portfolio', category: 'WordPress' },
    { src: 'Login.png', title: 'LMS Login System', category: 'Java Project' },
    { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop', title: 'E-Commerce Store', category: 'WordPress' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop', title: 'Brand Identity Work', category: 'Design' },
    { src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop', title: 'Portfolio Template', category: 'Web Dev' },
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', title: 'Dashboard UI Design', category: 'Design' },
    { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop', title: 'Landing Page Design', category: 'Web Dev' },
];

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
    initTypingAnimation();
    initNavbar();
    initThemeToggle();
    initHamburgerMenu();
    initSkillsTable();
    initProjects();
    initGallery();
    initContactForm();
    initScrollAnimations();
    initBackToTop();
    initSmoothScroll();
    initParticles();
    initSkillBars();
    initCounters();
});

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const text = "Malika Zaheer";
    const element = document.getElementById('typingText');
    let index = 0;
    let isDeleting = false;

    function type() {
        if (!element) return;

        if (isDeleting) {
            element.textContent = text.substring(0, index - 1);
            index--;
        } else {
            element.textContent = text.substring(0, index + 1);
            index++;
        }

        let speed = isDeleting ? 80 : 150;

        if (!isDeleting && index === text.length) {
            speed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            speed = 500; // Pause before retyping
            isDeleting = false;
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 1000);
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, header');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    toggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
}

// ===== HAMBURGER MENU =====
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== SKILLS TABLE =====
function initSkillsTable() {
    const tbody = document.getElementById('skillsTableBody');
    const sortNameBtn = document.getElementById('sortName');
    const sortLevelBtn = document.getElementById('sortLevel');

    let currentSort = { field: null, direction: 'asc' };

    function renderTable(data) {
        tbody.innerHTML = data.map(skill => `
            <tr>
                <td><strong>${skill.name}</strong></td>
                <td>${skill.category}</td>
                <td>
                    <span class="skill-level level-${skill.proficiency.toLowerCase()}">
                        ${skill.proficiency}
                    </span>
                </td>
                <td>${'★'.repeat(skill.level)}${'☆'.repeat(3 - skill.level)}</td>
            </tr>
        `).join('');
    }

    function sortData(field) {
        let direction = 'asc';
        if (currentSort.field === field && currentSort.direction === 'asc') {
            direction = 'desc';
        }
        currentSort = { field, direction };

        const sorted = [...skillsData].sort((a, b) => {
            let comparison = 0;
            if (field === 'name') {
                comparison = a.name.localeCompare(b.name);
            } else if (field === 'level') {
                comparison = a.level - b.level;
            }
            return direction === 'asc' ? comparison : -comparison;
        });

        renderTable(sorted);
        updateSortButtons();
    }

    function updateSortButtons() {
        sortNameBtn.classList.toggle('active', currentSort.field === 'name');
        sortLevelBtn.classList.toggle('active', currentSort.field === 'level');

        const icon = currentSort.direction === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
        if (currentSort.field === 'name') {
            sortNameBtn.querySelector('i').className = `fas ${icon}`;
            sortLevelBtn.querySelector('i').className = 'fas fa-sort';
        } else if (currentSort.field === 'level') {
            sortLevelBtn.querySelector('i').className = `fas ${icon}`;
            sortNameBtn.querySelector('i').className = 'fas fa-sort';
        }
    }

    sortNameBtn.addEventListener('click', () => sortData('name'));
    sortLevelBtn.addEventListener('click', () => sortData('level'));

    renderTable(skillsData);
}

// ===== PROJECTS =====
function initProjects() {
    const grid = document.getElementById('projectsGrid');
    const searchInput = document.getElementById('projectSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const emptyState = document.getElementById('projectsEmpty');

    let currentFilter = 'all';
    let currentSearch = '';

    function renderProjects() {
        let filtered = projectsData.filter(project => {
            const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
            const searchLower = currentSearch.toLowerCase();
            const matchesSearch = !currentSearch || 
                project.name.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower) ||
                project.technologies.some(t => t.toLowerCase().includes(searchLower)) ||
                project.tags.some(t => t.toLowerCase().includes(searchLower));

            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            grid.style.display = 'grid';
            emptyState.style.display = 'none';

            grid.innerHTML = filtered.map(project => `
                <article class="project-card" data-category="${project.category}">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.name}" loading="lazy">
                        <div class="project-overlay">
                            <div class="project-overlay-content">
                                <p>${project.technologies.join(' • ')}</p>
                                <div class="project-links">
                                    ${project.github ? `<a href="${project.github}" target="_blank" aria-label="View on GitHub"><i class="fab fa-github"></i></a>` : ''}
                                    ${project.live ? `<a href="${project.live}" target="_blank" aria-label="View Live"><i class="fas fa-external-link-alt"></i></a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <h3 class="project-title">${project.name}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>
                </article>
            `).join('');
        }
    }

    // Search
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderProjects();
    });

    // Filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProjects();
        });
    });

    renderProjects();
}

// ===== GALLERY & LIGHTBOX =====
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentIndex = 0;

    // Render gallery
    grid.innerHTML = galleryData.map((item, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <i class="fas fa-expand"></i>
                <h4>${item.title}</h4>
                <p>${item.category}</p>
            </div>
        </div>
    `).join('');

    // Open lightbox
    grid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            currentIndex = parseInt(item.dataset.index);
            openLightbox();
        }
    });

    function openLightbox() {
        const item = galleryData[currentIndex];
        lightboxImg.src = item.src;
        lightboxImg.alt = item.title;
        lightboxCaption.textContent = `${item.title} — ${item.category}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryData.length;
        openLightbox();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        openLightbox();
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

// ===== CONTACT FORM VALIDATION =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    const fields = {
        fullName: {
            element: document.getElementById('fullName'),
            error: document.getElementById('nameError'),
            success: document.getElementById('nameSuccess'),
            validate: (val) => {
                if (!val.trim()) return 'Full name is required';
                if (/\d/.test(val)) return 'Name cannot contain numbers';
                if (val.trim().length < 2) return 'Name must be at least 2 characters';
                return null;
            }
        },
        email: {
            element: document.getElementById('email'),
            error: document.getElementById('emailError'),
            success: document.getElementById('emailSuccess'),
            validate: (val) => {
                if (!val.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(val)) return 'Please enter a valid email address';
                return null;
            }
        },
        subject: {
            element: document.getElementById('subject'),
            error: document.getElementById('subjectError'),
            success: document.getElementById('subjectSuccess'),
            validate: (val) => {
                if (!val.trim()) return 'Subject is required';
                if (val.trim().length < 3) return 'Subject must be at least 3 characters';
                return null;
            }
        },
        message: {
            element: document.getElementById('message'),
            error: document.getElementById('messageError'),
            success: document.getElementById('messageSuccess'),
            validate: (val) => {
                if (!val.trim()) return 'Message is required';
                if (val.trim().length < 10) return 'Message must be at least 10 characters';
                return null;
            }
        }
    };

    // Real-time validation
    Object.values(fields).forEach(field => {
        field.element.addEventListener('input', () => validateField(field));
        field.element.addEventListener('blur', () => validateField(field));
    });

    function validateField(field) {
        const value = field.element.value;
        const error = field.validate(value);

        if (error) {
            field.element.classList.add('error');
            field.element.classList.remove('success');
            field.error.textContent = error;
            field.error.classList.add('show');
            field.success.classList.remove('show');
            return false;
        } else {
            field.element.classList.remove('error');
            field.element.classList.add('success');
            field.error.classList.remove('show');
            field.success.classList.add('show');
            return true;
        }
    }

    function validateAll() {
        return Object.values(fields).every(field => validateField(field));
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!validateAll()) {
            showStatus('Please fix the errors above.', 'error');
            return;
        }

        // Show loading
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success
        btnText.style.display = 'inline-flex';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;

        showStatus('Thank you! Your message has been sent successfully.', 'success');

        // Reset form
        form.reset();
        Object.values(fields).forEach(field => {
            field.element.classList.remove('error', 'success');
            field.error.classList.remove('show');
            field.success.classList.remove('show');
        });

        // Clear status after 5 seconds
        setTimeout(() => {
            document.getElementById('formStatus').className = 'form-status';
        }, 5000);
    });

    function showStatus(message, type) {
        const status = document.getElementById('formStatus');
        status.textContent = message;
        status.className = `form-status ${type}`;
    }
}

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill bars if in skills section
                if (entry.target.closest('.skills-bars')) {
                    animateSkillBars();
                }

                // Animate counters if in about section
                if (entry.target.closest('.about-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// ===== SKILL BARS ANIMATION =====
function initSkillBars() {
    // Will be triggered by Intersection Observer
}

function animateSkillBars() {
    document.querySelectorAll('.skill-progress-fill').forEach(bar => {
        const width = bar.dataset.width;
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 200);
    });
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    // Will be triggered by Intersection Observer
}

function animateCounters() {
    document.querySelectorAll('.stat-number[data-count]').forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            counter.textContent = current + (target >= 10 ? '+' : '');

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

// ===== PARTICLES =====
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ===== GEOLOCATION API (Bonus Web API) =====
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('Location:', position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.log('Location error:', error.message);
            }
        );
    }
}

// Call geolocation on load (optional - just to demonstrate API usage)
getLocation();
