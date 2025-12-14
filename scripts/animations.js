// ===================================
// ANIMATIONS.JS - Additional Animation Logic
// ===================================

// Skill Progress Bar Animation
document.addEventListener('DOMContentLoaded', function () {
    initSkillBars();
    initParallaxEffect();
    initCursorFollow();
});

// ===== Skill Bar Animation =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the skill bar
                const progressBar = entry.target;
                const progress = progressBar.style.getPropertyValue('--progress') || '0%';

                // Reset width first
                progressBar.style.width = '0%';

                // Trigger animation
                setTimeout(() => {
                    progressBar.style.width = progress;
                }, 100);

                // Unobserve after animation
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
}

// ===== Parallax Scroll Effect =====
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');

    if (heroSection) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.gradient-orb');

            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.2);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// ===== Custom Cursor Follow Effect (Optional Enhancement) =====
function initCursorFollow() {
    // Only enable on desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--color-accent-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            display: none;
        `;
        document.body.appendChild(cursor);

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Expand on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'rgba(59, 130, 246, 0.2)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'transparent';
            });
        });
    }
}

// ===== Count Up Animation for Stats =====
function animateCountUp(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats and trigger count up
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetText = statNumber.textContent;
            const targetNumber = parseInt(targetText.replace(/\D/g, ''));

            if (!isNaN(targetNumber)) {
                animateCountUp(statNumber, targetNumber);
            }

            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe all stat items
document.querySelectorAll('.stat-item').forEach(item => {
    statObserver.observe(item);
});

// ===== Tilt Effect for Cards (Subtle 3D Effect) =====
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize tilt effect on desktop only
if (window.innerWidth > 768) {
    initTiltEffect();
}

// ===== Floating Animation for Profile Image =====
function initProfileFloating() {
    const profileImage = document.querySelector('.profile-image');

    if (profileImage) {
        let floatDirection = 1;
        let floatPosition = 0;

        setInterval(() => {
            floatPosition += floatDirection * 0.5;

            if (floatPosition > 10 || floatPosition < -10) {
                floatDirection *= -1;
            }

            profileImage.style.transform = `translateY(${floatPosition}px)`;
        }, 50);
    }
}

initProfileFloating();

// ===== Intersection Observer for Fade In Animations =====
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});
