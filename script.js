// Effects Management - Declare at the top
let activeEffects = {
    'wave-distortion': false,
    'vhs-glitch': false,
    'static-noise': false
};

// World Clock variables
let worldClockTimeout;
let worldClockInterval;
let inactivityTimer = null;

// Grid highlight variables
let gridHighlight = null;

// Utility function
function isMobile() {
    return window.innerWidth <= 768;
}

// Theme Management
function getThemePreference() {
    // Default to dark mode on mobile, otherwise use saved preference
    const saved = localStorage.getItem('theme');
    if (!saved && isMobile()) {
        return 'dark';
    }
    return saved || 'auto';
}

function setThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
        // Night mode - dark theme without effects
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        disableAllEffects();
    } else if (theme === 'dream') {
        // Dream mode - dark theme with effects
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        enableDreamEffects();
    } else if (theme === 'light') {
        // Day mode - light theme
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        disableAllEffects();
    } else {
        // Auto mode - use system preference
        body.classList.remove('dark-mode', 'light-mode');
        disableAllEffects();
    }
}

function disableAllEffects() {
    Object.keys(activeEffects).forEach(effect => {
        if (activeEffects[effect]) {
            disableEffect(effect);
            activeEffects[effect] = false;
        }
    });
}

function enableDreamEffects() {
    // Enable all Dream effects
    const dreamEffects = ['wave-distortion', 'vhs-glitch', 'static-noise'];
    dreamEffects.forEach(effect => {
        if (!activeEffects[effect]) {
            enableEffect(effect);
            activeEffects[effect] = true;
        }
    });
}

function updateActiveTheme(theme) {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        if (item.getAttribute('data-theme') === theme) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Apply saved theme on page load
const savedTheme = getThemePreference();
applyTheme(savedTheme);
updateActiveTheme(savedTheme);

// Initialize Dream effects if needed
if (savedTheme === 'dream') {
    enableDreamEffects();
}

// Logo flicker animation on mobile (every 30 seconds)
if (isMobile()) {
    const navBrand = document.querySelector('.nav-brand');
    
    function triggerLogoFlicker() {
        if (navBrand) {
            navBrand.classList.add('auto-flicker');
            setTimeout(() => {
                navBrand.classList.remove('auto-flicker');
            }, 1000);
        }
    }
    
    // Trigger every 30 seconds on mobile
    setInterval(triggerLogoFlicker, 30000);
}

// Device Orientation Parallax for Mobile
let deviceOrientationEnabled = false;

async function requestDeviceOrientation() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS 13+ requires permission
        try {
            const permission = await DeviceOrientationEvent.requestPermission();
            if (permission === 'granted') {
                deviceOrientationEnabled = true;
                enableDeviceParallax();
            }
        } catch (error) {
            console.log('Device orientation permission denied');
        }
    } else if (window.DeviceOrientationEvent) {
        // Non-iOS or older iOS - no permission needed
        deviceOrientationEnabled = true;
        enableDeviceParallax();
    }
}

function enableDeviceParallax() {
    const tickets = document.querySelectorAll('.ticket-stub');
    const largeTicket = document.querySelector('.project-ticket-large');
    const worldClockContent = document.querySelector('.world-clock-content');
    
    // On mobile, set all tickets to "active" state immediately
    if (isMobile()) {
        tickets.forEach(ticket => {
            ticket.classList.add('mobile-parallax-active');
        });
        if (largeTicket) {
            largeTicket.classList.add('mobile-parallax-active');
        }
    }
    
    window.addEventListener('deviceorientation', (e) => {
        // Get device tilt angles
        const gamma = e.gamma; // Left to right tilt (-90 to 90)
        const beta = e.beta;   // Front to back tilt (-180 to 180)
        
        // Normalize to reasonable range (-1 to 1)
        const tiltX = Math.max(-1, Math.min(1, gamma / 30));
        const tiltY = Math.max(-1, Math.min(1, (beta - 45) / 30)); // Center around 45deg
        
        const rotateX = tiltY * -6;
        const rotateY = tiltX * 6;
        const moveX = tiltX * 20;
        const moveY = tiltY * 20;
        
        // Apply to small tickets
        tickets.forEach(ticket => {
            const header = ticket.querySelector('.ticket-header');
            const title = ticket.querySelector('.ticket-title');
            const details = ticket.querySelector('.ticket-details');
            const barcode = ticket.querySelector('.ticket-barcode');
            const perforation = ticket.querySelector('.ticket-perforation');
            
            ticket.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0px) translateZ(10px) scale(1.0)`;
            ticket.style.transition = 'transform 0.1s ease-out';
            
            // Layered parallax for elements - always active on mobile
            if (header) header.style.transform = `translateZ(60px) translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
            if (title) title.style.transform = `translateX(5px) translateZ(100px) scale(1.05) translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
            if (details) details.style.transform = `translateZ(50px) translate(${moveX * 0.25}px, ${moveY * 0.25}px)`;
            if (barcode) barcode.style.transform = `scaleX(1.05) translateZ(45px) translate(${moveX * 0.22}px, ${moveY * 0.22}px)`;
            if (perforation) perforation.style.transform = `translateZ(80px) translate(${moveX * 0.4}px, 0)`;
        });
        
        // Apply to large project ticket
        if (largeTicket) {
            const header = largeTicket.querySelector('.ticket-header-large');
            const title = largeTicket.querySelector('.project-title-large');
            const details = largeTicket.querySelector('.ticket-meta');
            const perforation = largeTicket.querySelector('.ticket-perforation-large');
            
            const moveXLarge = tiltX * 25;
            const moveYLarge = tiltY * 25;
            const rotateLarge = tiltX * 4;
            
            largeTicket.style.transform = `perspective(2000px) rotateX(${tiltY * -4}deg) rotateY(${rotateLarge}deg) translateY(0px) translateZ(10px) scale(1.0)`;
            largeTicket.style.transition = 'transform 0.1s ease-out';
            
            if (header) header.style.transform = `translateZ(60px) translate(${moveXLarge * 0.3}px, ${moveYLarge * 0.3}px)`;
            if (title) title.style.transform = `translateZ(100px) scale(1.02) translate(${moveXLarge * 0.5}px, ${moveYLarge * 0.5}px)`;
            if (details) details.style.transform = `translateZ(50px) translate(${moveXLarge * 0.25}px, ${moveYLarge * 0.25}px)`;
            if (perforation) perforation.style.transform = `translateZ(80px) translate(${moveXLarge * 0.4}px, 0)`;
        }
        
        // Apply to world clock if visible
        if (worldClockContent && worldClockContent.closest('.world-clock-popup').classList.contains('show')) {
            const header = worldClockContent.querySelector('.world-clock-header');
            const timeZones = worldClockContent.querySelectorAll('.time-zone');
            
            worldClockContent.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            worldClockContent.style.transition = 'transform 0.1s ease-out';
            
            if (header) header.style.transform = `translateZ(60px) translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
            timeZones.forEach((zone, index) => {
                const isHovered = zone.matches(':hover');
                const scale = isHovered ? 1.05 : 1;
                zone.style.transform = `translateZ(${40 + index * 5}px) translate(${moveX * 0.25}px, ${moveY * 0.25}px) scale(${scale})`;
            });
        }
    });
}

// Auto-enable device parallax on mobile
if (isMobile()) {
    const enableBtn = document.getElementById('enableMotionBtn');
    
    // Check if permission is needed (iOS 13+)
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        // Show button for iOS users
        setTimeout(() => {
            if (enableBtn) {
                enableBtn.classList.add('show');
            }
        }, 1500);
        
        // Handle button click
        if (enableBtn) {
            enableBtn.addEventListener('click', async () => {
                await requestDeviceOrientation();
                enableBtn.classList.remove('show');
                setTimeout(() => {
                    enableBtn.style.display = 'none';
                }, 300);
            });
        }
    } else if (window.DeviceOrientationEvent) {
        // Auto-enable for Android and older iOS
        enableDeviceParallax();
        // Hide button
        if (enableBtn) {
            enableBtn.style.display = 'none';
        }
    }
}

// Page Transition
// Create transition overlay
const pageTransition = document.createElement('div');
pageTransition.className = 'page-transition';
document.body.appendChild(pageTransition);

// Handle ticket link clicks with transition
document.querySelectorAll('.ticket-stub-link, .back-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        // Trigger transition
        pageTransition.classList.add('active');
        
        // Navigate after transition
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Settings Dropdown Toggle
const settingsButton = document.querySelector('.settings-button');
const settingsDropdown = document.querySelector('.settings-dropdown');

if (settingsButton && settingsDropdown) {
    settingsButton.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsDropdown.contains(e.target)) {
            settingsDropdown.classList.remove('active');
        }
    });

    // Handle theme selection
    document.querySelectorAll('.dropdown-item[data-theme]').forEach(item => {
        item.addEventListener('click', () => {
            const theme = item.getAttribute('data-theme');
            setThemePreference(theme);
            applyTheme(theme);
            updateActiveTheme(theme);
            settingsDropdown.classList.remove('active');
            
            // Reset inactivity state if manually selecting theme
            isInactivityDreamMode = false;
            resetInactivityTimer();
        });
    });
}

// Smooth scrolling for navigation links
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

// Ticket stub parallax effect with layered element movement (desktop only)
const ticketStubs = document.querySelectorAll('.ticket-stub');

// Only enable desktop mouse parallax if not on mobile
if (!isMobile()) {
ticketStubs.forEach((ticket) => {
    let currentRotateX = 0;
    let currentRotateY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrame = null;
    
    const header = ticket.querySelector('.ticket-header');
    const title = ticket.querySelector('.ticket-title');
    const details = ticket.querySelector('.ticket-details');
    const barcode = ticket.querySelector('.ticket-barcode');
    const perforation = ticket.querySelector('.ticket-perforation');
    
    function animate() {
        // Smooth interpolation for floating effect
        currentRotateX += (targetRotateX - currentRotateX) * 0.1;
        currentRotateY += (targetRotateY - currentRotateY) * 0.1;
        
        ticket.style.transform = `perspective(2000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateY(-12px) translateZ(20px) scale(1.02)`;
        
        // Layered parallax for each element based on depth
        // Elements with more translateZ move more (closer = more movement)
        if (header) {
            const moveX = mouseX * 0.3; // 30% movement
            const moveY = mouseY * 0.3;
            header.style.transform = `translateZ(60px) translate(${moveX}px, ${moveY}px)`;
        }
        
        if (title) {
            const moveX = mouseX * 0.5; // 50% movement (most dramatic - furthest forward)
            const moveY = mouseY * 0.5;
            title.style.transform = `translateX(5px) translateZ(100px) scale(1.05) translate(${moveX}px, ${moveY}px)`;
        }
        
        if (details) {
            const moveX = mouseX * 0.25; // 25% movement
            const moveY = mouseY * 0.25;
            details.style.transform = `translateZ(50px) translate(${moveX}px, ${moveY}px)`;
        }
        
        if (barcode) {
            const moveX = mouseX * 0.22; // 22% movement
            const moveY = mouseY * 0.22;
            barcode.style.transform = `scaleX(1.05) translateZ(45px) translate(${moveX}px, ${moveY}px)`;
        }
        
        if (perforation) {
            const moveX = mouseX * 0.4; // 40% movement
            perforation.style.transform = `translateZ(80px) translate(${moveX}px, 0)`;
        }
        
        // Continue animation if not at target
        if (Math.abs(targetRotateX - currentRotateX) > 0.01 || Math.abs(targetRotateY - currentRotateY) > 0.01) {
            animationFrame = requestAnimationFrame(animate);
        }
    }
    
    ticket.addEventListener('mouseenter', function() {
        this.style.transition = 'box-shadow 0.3s ease';
    });
    
    ticket.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate target rotation
        targetRotateX = ((y - centerY) / centerY) * -6;
        targetRotateY = ((x - centerX) / centerX) * 6;
        
        // Calculate mouse offset from center for parallax (-1 to 1)
        mouseX = ((x - centerX) / centerX) * 20; // Max 20px movement
        mouseY = ((y - centerY) / centerY) * 20;
        
        // Start animation if not running
        if (!animationFrame) {
            animationFrame = requestAnimationFrame(animate);
        }
    });
    
    ticket.addEventListener('mouseleave', function() {
        // Cancel animation
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
        
        // Smooth return to rest
        this.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
        this.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px) scale(1)';
        
        // Reset elements
        if (header) header.style.transform = '';
        if (title) title.style.transform = '';
        if (details) details.style.transform = '';
        if (barcode) barcode.style.transform = '';
        if (perforation) perforation.style.transform = '';
        
        // Reset values
        currentRotateX = 0;
        currentRotateY = 0;
        targetRotateX = 0;
        targetRotateY = 0;
        mouseX = 0;
        mouseY = 0;
    });
    
    ticket.addEventListener('click', function(e) {
        const projectNumber = this.getAttribute('data-project');
        const projectTitle = this.querySelector('.ticket-title').textContent.trim();
        console.log(`Opening project ${projectNumber}: ${projectTitle}`);
    });
});
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
const sections = document.querySelectorAll('.about-section, .contact-section');
sections.forEach(section => {
    observer.observe(section);
});

// Add parallax effect to hero on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && currentScroll < window.innerHeight) {
        hero.style.opacity = 1 - (currentScroll / window.innerHeight) * 0.5;
    }
    
    lastScroll = currentScroll;
});

// Add navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Prevent initial animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Console easter egg for developers
    const hour = new Date().getHours();
    let greeting;
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon';
    } else if (hour >= 17 && hour < 22) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }
    
    console.log(`%c${greeting}! 👋`, 'font-size: 20px; font-weight: bold; color: #000;');
    console.log('%cThanks for checking out the code! 🎫', 'font-size: 14px; color: #666;');
});

// Easter Egg - Time-based greeting
let logoClickCount = 0;
let clickTimeout;

function getGreeting() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
        return 'Good Morning ☀️';
    } else if (hour >= 12 && hour < 17) {
        return 'Good Afternoon ✨';
    } else if (hour >= 17 && hour < 22) {
        return 'Good Evening 🌙';
    } else {
        return 'Good Night ⭐';
    }
}

function showEasterEgg() {
    // Create easter egg element
    const easterEgg = document.createElement('div');
    easterEgg.className = 'easter-egg';
    easterEgg.textContent = getGreeting();
    document.body.appendChild(easterEgg);
    
    // Animate in
    setTimeout(() => {
        easterEgg.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        easterEgg.classList.remove('show');
        setTimeout(() => {
            easterEgg.remove();
        }, 500);
    }, 3000);
    
    // Reset counter
    logoClickCount = 0;
}

// Add click listener to logo
const navBrand = document.querySelector('.nav-brand');
if (navBrand) {
    navBrand.addEventListener('click', (e) => {
        // Only trigger easter egg if clicking logo on home page (not navigating)
        const isHomePage = window.location.pathname.includes('index.html') || 
                          window.location.pathname === '/' ||
                          window.location.pathname.endsWith('/ticket_site/');
        
        if (isHomePage) {
            logoClickCount++;
            
            // Clear previous timeout
            clearTimeout(clickTimeout);
            
            // Reset counter after 2 seconds of no clicks
            clickTimeout = setTimeout(() => {
                logoClickCount = 0;
            }, 2000);
            
            // Show easter egg after 5 clicks
            if (logoClickCount >= 5) {
                e.preventDefault();
                showEasterEgg();
            }
        }
    });
}

// Effects Management
function enableEffect(effect) {
    switch(effect) {
        case 'wave-distortion':
            enableWaveDistortion();
            break;
        case 'vhs-glitch':
            enableVHSGlitch();
            break;
        case 'static-noise':
            enableStaticNoise();
            break;
    }
}

function disableEffect(effect) {
    switch(effect) {
        case 'wave-distortion':
            disableWaveDistortion();
            break;
        case 'vhs-glitch':
            disableVHSGlitch();
            break;
        case 'static-noise':
            disableStaticNoise();
            break;
    }
}

// Wave Distortion
function enableWaveDistortion() {
    const overlay = document.createElement('div');
    overlay.className = 'wave-distortion-overlay';
    overlay.id = 'wave-overlay';
    document.body.appendChild(overlay);
    document.body.classList.add('wave-active');
}

function disableWaveDistortion() {
    const overlay = document.getElementById('wave-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('wave-active');
}

// VHS Glitch
function enableVHSGlitch() {
    const overlay = document.createElement('div');
    overlay.className = 'vhs-glitch-overlay';
    overlay.id = 'vhs-overlay';
    document.body.appendChild(overlay);
    document.body.classList.add('vhs-active');
}

function disableVHSGlitch() {
    const overlay = document.getElementById('vhs-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('vhs-active');
}

// Static Noise
function enableStaticNoise() {
    const overlay = document.createElement('div');
    overlay.className = 'static-noise-overlay';
    overlay.id = 'static-overlay';
    document.body.appendChild(overlay);
    document.body.classList.add('static-active');
}

function disableStaticNoise() {
    const overlay = document.getElementById('static-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('static-active');
}

// Large project ticket parallax effect (desktop only)
const projectTicketLarge = document.querySelector('.project-ticket-large');

if (projectTicketLarge && !isMobile()) {
    let currentRotateX = 0;
    let currentRotateY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrame = null;
    
    const header = projectTicketLarge.querySelector('.ticket-header-large');
    const title = projectTicketLarge.querySelector('.project-title-large');
    const details = projectTicketLarge.querySelector('.ticket-meta');
    const perforation = projectTicketLarge.querySelector('.ticket-perforation-large');
    
    function animate() {
        // Smooth interpolation for floating effect
        currentRotateX += (targetRotateX - currentRotateX) * 0.1;
        currentRotateY += (targetRotateY - currentRotateY) * 0.1;
        
        projectTicketLarge.style.transform = `perspective(2000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateY(-8px) translateZ(15px) scale(1.01)`;
        
        // Layered parallax for each element based on depth
        if (header) {
            const moveX = mouseX * 0.3;
            const moveY = mouseY * 0.3;
            header.style.transform = `translateZ(60px) translate(${moveX}px, ${moveY}px)`;
        }
        
        if (title) {
            const moveX = mouseX * 0.5;
            const moveY = mouseY * 0.5;
            title.style.transform = `translateZ(100px) scale(1.02) translate(${moveX}px, ${moveY}px)`;
        }
        
        if (details) {
            const moveX = mouseX * 0.25;
            const moveY = mouseY * 0.25;
            details.style.transform = `translateZ(50px) translate(${moveX}px, ${moveY}px)`;
        }
        
        if (perforation) {
            const moveX = mouseX * 0.4;
            perforation.style.transform = `translateZ(80px) translate(${moveX}px, 0)`;
        }
        
        // Continue animation if not at target
        if (Math.abs(targetRotateX - currentRotateX) > 0.01 || Math.abs(targetRotateY - currentRotateY) > 0.01) {
            animationFrame = requestAnimationFrame(animate);
        }
    }
    
    projectTicketLarge.addEventListener('mouseenter', function() {
        this.style.transition = 'box-shadow 0.3s ease';
    });
    
    projectTicketLarge.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate target rotation
        targetRotateX = ((y - centerY) / centerY) * -4; // Slightly less dramatic for large ticket
        targetRotateY = ((x - centerX) / centerX) * 4;
        
        // Calculate mouse offset from center for parallax
        mouseX = ((x - centerX) / centerX) * 25; // Max 25px movement (larger ticket)
        mouseY = ((y - centerY) / centerY) * 25;
        
        // Start animation if not running
        if (!animationFrame) {
            animationFrame = requestAnimationFrame(animate);
        }
    });
    
    projectTicketLarge.addEventListener('mouseleave', function() {
        // Cancel animation
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
        
        // Smooth return to rest
        this.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
        this.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px) scale(1)';
        
        // Reset elements
        if (header) header.style.transform = '';
        if (title) title.style.transform = '';
        if (details) details.style.transform = '';
        if (perforation) perforation.style.transform = '';
        
        // Reset values
        currentRotateX = 0;
        currentRotateY = 0;
        targetRotateX = 0;
        targetRotateY = 0;
        mouseX = 0;
        mouseY = 0;
    });
}

// World Clock Functions
function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

function updateWorldClock() {
    const now = new Date();
    
    // NYC (Eastern Time)
    const nycTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    document.getElementById('time-nyc').textContent = formatTime(nycTime);
    
    // Chicago (Central Time)
    const chicagoTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Chicago"}));
    document.getElementById('time-chicago').textContent = formatTime(chicagoTime);
    
    // Denver (Mountain Time)
    const denverTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Denver"}));
    document.getElementById('time-denver').textContent = formatTime(denverTime);
    
    // Los Angeles (Pacific Time)
    const laTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
    document.getElementById('time-la').textContent = formatTime(laTime);
    
    // Berlin (Central European Time)
    const berlinTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Berlin"}));
    document.getElementById('time-berlin').textContent = formatTime(berlinTime);
    
    // London (Greenwich Mean Time)
    const londonTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/London"}));
    document.getElementById('time-london').textContent = formatTime(londonTime);
}

function highlightUserTimezone() {
    // Get user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Find and highlight matching timezone
    const timeZones = document.querySelectorAll('.time-zone');
    timeZones.forEach(zone => {
        const zoneTimezone = zone.getAttribute('data-timezone');
        if (zoneTimezone === userTimezone) {
            zone.classList.add('user-timezone');
        } else {
            zone.classList.remove('user-timezone');
        }
    });
}

function showWorldClock() {
    const popup = document.getElementById('worldClockPopup');
    popup.classList.add('show');
    
    // Update times immediately
    updateWorldClock();
    
    // Highlight user's timezone
    highlightUserTimezone();
    
    // Start updating every second
    worldClockInterval = setInterval(updateWorldClock, 1000);
    
    // Pause inactivity timer while clock is open
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        inactivityTimer = null;
    }
}

function hideWorldClock() {
    const popup = document.getElementById('worldClockPopup');
    popup.classList.remove('show');
    
    // Stop updating
    if (worldClockInterval) {
        clearInterval(worldClockInterval);
        worldClockInterval = null;
    }
    
    // Restart inactivity timer when clock is closed
    resetInactivityTimer();
}

// Inactivity Timer - Show world clock after 30 seconds
function resetInactivityTimer() {
    // Clear existing timer
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
    }
    
    // Set new timer
    inactivityTimer = setTimeout(() => {
        const popup = document.getElementById('worldClockPopup');
        // Only show if not already visible
        if (popup && !popup.classList.contains('show')) {
            showWorldClock();
        }
    }, 30000); // 30 seconds
}

// Reset timer on user activity
function setupInactivityTracking() {
    // Skip inactivity tracking on mobile
    if (isMobile()) {
        return;
    }
    
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'click'];
    
    activityEvents.forEach(event => {
        document.addEventListener(event, () => {
            const popup = document.getElementById('worldClockPopup');
            // Only reset timer if world clock is not currently shown
            if (popup && !popup.classList.contains('show')) {
                resetInactivityTimer();
            }
        }, { passive: true });
    });
    
    // Start the initial timer
    resetInactivityTimer();
}

function initializeWorldClock() {
    // Set up open button
    const openBtn = document.getElementById('worldClockButton');
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            showWorldClock();
            // Close settings dropdown
            const settingsDropdown = document.querySelector('.settings-dropdown');
            if (settingsDropdown) {
                settingsDropdown.classList.remove('active');
            }
        });
    }
    
    // Set up close button
    const closeBtn = document.getElementById('worldClockClose');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideWorldClock);
    }
    
    // Set up click outside to close
    const popup = document.getElementById('worldClockPopup');
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                hideWorldClock();
            }
        });
    }
}

// World Clock parallax effect (desktop only)
function initializeWorldClockParallax() {
    if (isMobile()) return; // Skip on mobile - device orientation handles it
    
    const worldClockContent = document.querySelector('.world-clock-content');
    if (!worldClockContent) return;
    
    let currentRotateX = 0;
    let currentRotateY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrame = null;
    let isMouseOver = false;
    
    function animate() {
        currentRotateX += (targetRotateX - currentRotateX) * 0.1;
        currentRotateY += (targetRotateY - currentRotateY) * 0.1;
        
        worldClockContent.style.transform = `perspective(2000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
        
        const header = worldClockContent.querySelector('.world-clock-header');
        const timeZones = worldClockContent.querySelectorAll('.time-zone');
        
        if (header) {
            const moveX = mouseX * 0.3;
            const moveY = mouseY * 0.3;
            header.style.transform = `translateZ(60px) translate(${moveX}px, ${moveY}px)`;
        }
        
        timeZones.forEach((zone, index) => {
            const moveX = mouseX * 0.25;
            const moveY = mouseY * 0.25;
            const isHovered = zone.matches(':hover');
            const scale = isHovered ? 1.05 : 1;
            zone.style.transform = `translateZ(${40 + index * 5}px) translate(${moveX}px, ${moveY}px) scale(${scale})`;
        });
        
        // Continue animation while mouse is over
        if (isMouseOver) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            animationFrame = null;
        }
    }
    
    worldClockContent.addEventListener('mouseenter', function() {
        this.style.transition = 'box-shadow 0.3s ease';
        isMouseOver = true;
        if (!animationFrame) {
            animationFrame = requestAnimationFrame(animate);
        }
    });
    
    worldClockContent.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        targetRotateX = ((y - centerY) / centerY) * -4;
        targetRotateY = ((x - centerX) / centerX) * 4;
        
        mouseX = ((x - centerX) / centerX) * 15;
        mouseY = ((y - centerY) / centerY) * 15;
        
        if (!animationFrame && isMouseOver) {
            animationFrame = requestAnimationFrame(animate);
        }
    });
    
    worldClockContent.addEventListener('mouseleave', function() {
        isMouseOver = false;
        
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
        
        this.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
        this.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(0deg)';
        
        const header = this.querySelector('.world-clock-header');
        const timeZones = this.querySelectorAll('.time-zone');
        
        if (header) header.style.transform = '';
        timeZones.forEach(zone => zone.style.transform = '');
        
        currentRotateX = 0;
        currentRotateY = 0;
        targetRotateX = 0;
        targetRotateY = 0;
        mouseX = 0;
        mouseY = 0;
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeWorldClock();
    initializeWorldClockParallax();
    setupInactivityTracking();
});
 