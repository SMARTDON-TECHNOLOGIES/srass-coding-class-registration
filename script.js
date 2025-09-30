// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Registration form animation and validation
const form = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.style.color = '#2d3a7b';
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    if (!name || !email || !phone) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'crimson';
        return;
    }
    formMessage.textContent = 'Sending...';
    formMessage.style.color = '#2d3a7b';
    formMessage.style.opacity = 0.7;
    setTimeout(() => {
        formMessage.textContent = `Thank you, ${name}! Your registration has been received.`;
        formMessage.style.opacity = 1;
        form.reset();
    }, 1200);
});

// Contact form validation and animation
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');
if (contactForm && contactMessage) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        contactMessage.textContent = '';
        contactMessage.style.color = '#2d3a7b';
        const formData = new FormData(contactForm);
        const name = formData.get('contactName').trim();
        const email = formData.get('contactEmail').trim();
        const message = formData.get('contactMessage').trim();
        if (!name || !email || !message) {
            contactMessage.textContent = 'Please fill in all fields.';
            contactMessage.style.color = 'crimson';
            return;
        }
        contactMessage.textContent = 'Sending...';
        contactMessage.style.opacity = 0.7;
        setTimeout(() => {
            contactMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
            contactMessage.style.opacity = 1;
            contactForm.reset();
        }, 1200);
    });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
    // Close menu when a link is clicked (on mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}

// Flyer slider animation
const flyerSlides = document.querySelectorAll('.flyer-slide');
const flyerDots = document.querySelectorAll('.flyer-dots .dot');
let flyerIndex = 0;
function showFlyerSlide(idx) {
    flyerSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
    });
    flyerDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
    });
}
function nextFlyerSlide() {
    flyerIndex = (flyerIndex + 1) % flyerSlides.length;
    showFlyerSlide(flyerIndex);
}
if (flyerSlides.length && flyerDots.length) {
    flyerDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            flyerIndex = i;
            showFlyerSlide(flyerIndex);
        });
    });
    setInterval(nextFlyerSlide, 3500);
}
