// Smooth scroll untuk navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle form submission
document.querySelector('.signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(`✓ Terima kasih! Kami akan mengirim update ke ${email}`);
        this.reset();
    }
});

// Scroll animation untuk navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Intersection Observer untuk animasi on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe semua feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Handle download buttons
document.querySelectorAll('.download-buttons a').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const text = this.textContent.trim();
        alert(`✓ Download ${text} akan segera dimulai!`);
    });
});

console.log('✓ RotersOs Landing Page loaded successfully! 🚀');