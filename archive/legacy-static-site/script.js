/**
 * Charlie Pelle Portfolio Logic (script.js)
 * High-fidelity interactivity for premium glassmorphic aurora portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Navigation Menu Drawer ---
    const hamburger = document.getElementById('hamburgerMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleDrawer = () => {
        hamburger.classList.toggle('active');
        mobileOverlay.classList.toggle('open');
        mobileDrawer.classList.toggle('open');
        
        // Toggle hamburger icon between bars and times (close)
        const icon = hamburger.querySelector('i');
        if (hamburger.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    };

    hamburger.addEventListener('click', toggleDrawer);
    mobileOverlay.addEventListener('click', toggleDrawer);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) {
                toggleDrawer();
            }
        });
    });

    // --- 2. Dark/Light Theme Switcher ---
    const themeToggleBtn = document.getElementById('themeToggle');
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
        document.body.classList.add('light-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        // Save state to local storage
        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        
        // Tiny tap micro-animation on toggle
        themeToggleBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggleBtn.style.transform = '';
        }, 150);
    });

    // --- 3. Scroll Interactions ---
    const header = document.getElementById('header');
    const scrollProgress = document.getElementById('scrollProgress');
    const navLinks = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Scroll Progress indicator
        const scrollPct = docHeight > 0 ? (scrollTop / docHeight) : 0;
        scrollProgress.style.transform = `scaleX(${scrollPct})`;
        
        // Header background transition on scroll
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active Navigation Link Highlight on scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially

    // --- 4. Scroll Reveal Animations (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once revealed, no need to track again
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 5. Skill Progress Bars Animation (Separate Observer) ---
    const skillsSection = document.getElementById('skills');
    const skillFills = document.querySelectorAll('.skill-progress-fill');
    
    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillFills.forEach(fill => {
                    const targetWidth = fill.getAttribute('data-width');
                    fill.style.width = targetWidth;
                });
                // Trigger only once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // --- 6. Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    const phrases = [
        'Charlie Pelle',
        'a Fullstack Developer',
        'a Laravel Specialist',
        'an API Integrator'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const runTypewriter = () => {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deletes faster
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at full string
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before writing next string
        }

        setTimeout(runTypewriter, typingSpeed);
    };

    if (typewriterElement) {
        runTypewriter();
    }

    // --- 7. Portfolio Filtering System ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active to current button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-categories').split(' ');
                
                // Add animate fade-out scale style transitions
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    // Show
                    card.style.display = '';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });
        });
    });

    // --- 8. Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect info
            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;
            const messageInput = document.getElementById('message').value;

            // Simple Client-side UI State Update
            formStatus.className = 'form-status success';
            formStatus.textContent = `Thanks ${nameInput}! Your message has been sent successfully. I will get back to you at ${emailInput} soon.`;
            
            // Clear inputs
            contactForm.reset();

            // Clear status after 8 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 8000);
        });
    }

    // --- 9. Scroll To Top Button ---
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
