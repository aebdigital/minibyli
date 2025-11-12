// GSAP Animations and Lenis Smooth Scrolling for MiniBýli

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Connect Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Animation functions
function initializeAnimations() {
    // Hero section animations
    if (document.querySelector('.hero')) {
        const heroTimeline = gsap.timeline();
        
        heroTimeline
            .from('.hero h1', {
                opacity: 0,
                y: 100,
                duration: 1.2,
                ease: 'power3.out'
            })
            .from('.hero .cta-button', {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.5');
    }

    // Mini hero animations (for subpages)
    if (document.querySelector('.mini-hero')) {
        gsap.from('.mini-hero h1', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        });

        if (document.querySelector('.mini-hero p')) {
            gsap.from('.mini-hero p', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out'
            });
        }
    }

    // Product cards animation
    if (document.querySelectorAll('.product-card').length > 0) {
        gsap.from('.product-card', {
            opacity: 0,
            y: 80,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 0.5
        });
    }

    // Blog cards animation
    if (document.querySelectorAll('.blog-card').length > 0) {
        gsap.from('.blog-card', {
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.blog-grid',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // About page content animation
    if (document.querySelector('.about-content-wrapper')) {
        const aboutElements = document.querySelectorAll('.about-content-wrapper > *');
        
        gsap.from(aboutElements, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-content-wrapper',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Product detail page animations
    if (document.querySelector('.product-hero')) {
        const productTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.product-hero',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        productTimeline
            .from('.product-image-large', {
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: 'power2.out'
            })
            .from('.product-hero h1', {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.4');
    }

    // Product info sections animation
    if (document.querySelectorAll('.info-section').length > 0) {
        gsap.from('.info-section', {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.product-info',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Sidebar animation (for product pages)
    if (document.querySelector('.sidebar')) {
        gsap.from('.sidebar .product-nav li', {
            opacity: 0,
            x: -30,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.3
        });
    }

    // Blog post content animation
    if (document.querySelector('.blog-post-content')) {
        const blogElements = document.querySelectorAll('.blog-post-content > *');
        
        gsap.from(blogElements, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.blog-post-content',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Microgreens info section animation
    if (document.querySelector('.microgreens-info')) {
        gsap.from('.microgreens-info h2', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.microgreens-info',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from('.microgreens-info p', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.microgreens-info',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Newsletter section animation
    if (document.querySelector('.newsletter-section')) {
        gsap.from('.newsletter-content > *', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.newsletter-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Contact form animation
    if (document.querySelector('.contact-form')) {
        gsap.from('.contact-form .form-group', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Counter animation (if any numeric displays)
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'));
        const duration = 2;

        gsap.fromTo(counter, {
            textContent: 0
        }, {
            textContent: target,
            duration: duration,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });


    // Hover animations for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    }
}

// Performance optimizations
function optimizeAnimations() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0.5);
        lenis.destroy();
        return;
    }

    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            gsap.globalTimeline.pause();
            lenis.stop();
        } else {
            gsap.globalTimeline.resume();
            lenis.start();
        }
    });

    // Optimize for mobile devices
    if (window.innerWidth < 768) {
        // Reduce animation duration on mobile
        gsap.globalTimeline.timeScale(1.5);
        
        // Disable smooth scroll on mobile for better performance
        lenis.options.smoothTouch = false;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    optimizeAnimations();
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Clean up animations on page unload
window.addEventListener('beforeunload', () => {
    ScrollTrigger.killAll();
    lenis.destroy();
});