// DOM Elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');
const backToTopButton = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const currentYearSpan = document.getElementById('currentYear');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Typing Effect
function typingEffect() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    // Get roles from data attribute
    const rolesElement = document.querySelector('.roles-data');
    const roles = rolesElement.getAttribute('data-roles').split(',');
    
    const typingDelay = 150; // Delay between each character
    const erasingDelay = 100; // Delay when erasing
    const newTextDelay = 2000; // Delay between current and next text
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Remove character
            typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add character
            typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at end
            isDeleting = true;
            setTimeout(type, newTextDelay);
        } 
        // If deleting is complete
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next role
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        } 
        // Continue typing or deleting
        else {
            setTimeout(type, isDeleting ? erasingDelay : typingDelay);
        }
    }
    
    // Start the typing effect
    if (roles.length && typedTextSpan) {
        setTimeout(type, newTextDelay);
    }
}

// Initialize typing effect
typingEffect();

// Mobile Navigation Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll to section when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Active link on scroll
function highlightNavLink() {
    let scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Sticky Navbar & Back to Top Button Visibility
function handleScroll() {
    // Sticky navbar
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.padding = '1rem 0';
    }
    
    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
    
    // Highlight active nav link
    highlightNavLink();
}

// Scroll event listener
window.addEventListener('scroll', handleScroll);

// Back to top button click event
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Theme Toggle
if (themeToggle) {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
    
    // Theme toggle click event
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission (in a real application, you would send this data to a server)
        setTimeout(() => {
            // Show success message
            formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            formMessage.classList.add('success');
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.classList.remove('success');
            }, 5000);
        }, 1000);
    });
}

// Scroll Reveal Animation (simple implementation)
function revealOnScroll() {
    const elements = document.querySelectorAll('.skill-item, .project-card, .about-image, .about-text');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .skill-item, .project-card, .about-image, .about-text {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .skill-item.visible, .project-card.visible, .about-image.visible, .about-text.visible {
        opacity: 1;
        transform: translateY(0);
    }
    .skill-item:nth-child(2), .project-card:nth-child(2) {
        transition-delay: 0.2s;
    }
    .skill-item:nth-child(3), .project-card:nth-child(3) {
        transition-delay: 0.4s;
    }
    .skill-item:nth-child(4) {
        transition-delay: 0.6s;
    }
    .skill-item:nth-child(5) {
        transition-delay: 0.8s;
    }
    .skill-item:nth-child(6) {
        transition-delay: 1s;
    }
    .skill-item:nth-child(7) {
        transition-delay: 1.2s;
    }
    .skill-item:nth-child(8) {
        transition-delay: 1.4s;
    }
`;
document.head.appendChild(style);

// Call reveal function on load and scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    // Call initial functions
    handleScroll();
    revealOnScroll();
});