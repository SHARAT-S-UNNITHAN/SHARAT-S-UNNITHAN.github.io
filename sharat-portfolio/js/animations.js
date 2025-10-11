// Advanced Animations JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initFloatingElements();
    initTextAnimations();
    initParallaxEffects();
    initHoverEffects();
    initLoadingAnimations();
    initCustomCursor();
});

// Floating elements animation
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Add random delay and duration for more natural movement
        const delay = index * 0.5;
        const duration = 3 + Math.random() * 2;
        
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;
        
        // Add interactive behavior
        element.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.2)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'scale(1)';
        });
    });
}

// Text animations
function initTextAnimations() {
    // Typewriter effect for hero section
    const dynamicText = document.querySelector('.dynamic-text');
    if (dynamicText) {
        // Ensure the animation runs smoothly
        setTimeout(() => {
            dynamicText.style.visibility = 'visible';
        }, 100);
    }
    
    // Animate headings on scroll
    const headings = document.querySelectorAll('h1, h2, h3, .section-title');
    headings.forEach(heading => {
        heading.classList.add('reveal');
    });
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Advanced hover effects
function initHoverEffects() {
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Card tilt effect
    const cards = document.querySelectorAll('.service-card, .project-card, .pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Loading animations
function initLoadingAnimations() {
    // Simulate loading progress
    const loadingElements = document.querySelectorAll('.shimmer');
    
    loadingElements.forEach(element => {
        // Remove shimmer after content loads
        setTimeout(() => {
            element.classList.remove('shimmer');
        }, 2000);
    });
}

// Custom cursor (optional)
function initCustomCursor() {
    // Only enable on desktop
    if (window.innerWidth < 768) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Change cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .service-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
            follower.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
            follower.classList.remove('cursor-hover');
        });
    });
    
    // Add styles for custom cursor
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: width 0.2s, height 0.2s;
        }
        
        .cursor-follower {
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.1s;
        }
        
        .cursor-hover {
            width: 16px;
            height: 16px;
        }
        
        .cursor-follower.cursor-hover {
            width: 50px;
            height: 50px;
            opacity: 0.5;
        }
        
        * {
            cursor: none;
        }
    `;
    document.head.appendChild(style);
}

// Particle background (optional)
function initParticleBackground() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const canvas = document.createElement('canvas');
    canvas.className = 'particle-background';
    heroSection.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(108, 99, 255, ${Math.random() * 0.5})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connect particles
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Add CSS for particle background
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .particle-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    
    .hero {
        position: relative;
    }
`;
document.head.appendChild(particleStyle);

// Initialize particle background if needed
// initParticleBackground();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for complex animations
const complexObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your complex animation logic here
            entry.target.style.animation = 'complexReveal 1s ease forwards';
        }
    });
}, {
    threshold: 0.2
});

// Observe elements that need complex animations
document.querySelectorAll('.complex-animate').forEach(el => {
    complexObserver.observe(el);
});

// Add complex animation keyframes
const complexKeyframes = document.createElement('style');
complexKeyframes.textContent = `
    @keyframes complexReveal {
        0% {
            opacity: 0;
            transform: translateY(50px) rotateX(45deg);
        }
        100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
        }
    }
`;
document.head.appendChild(complexKeyframes);