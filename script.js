// Theme Management
function getThemePreference() {
    return localStorage.getItem('theme') || 'auto';
}

function setThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else if (theme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        // Disable all effects when switching to Day mode
        disableAllEffects();
    } else {
        // Auto mode - remove manual classes to use CSS media query
        body.classList.remove('dark-mode', 'light-mode');
        // Check if auto mode is light, disable all effects if so
        if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
            disableAllEffects();
        }
    }
}

function disableAllEffects() {
    Object.keys(activeEffects).forEach(effect => {
        if (activeEffects[effect]) {
            disableEffect(effect);
            const effectItem = document.querySelector(`[data-effect="${effect}"]`);
            if (effectItem) {
                effectItem.classList.remove('active');
                effectItem.querySelector('.toggle-indicator').textContent = 'Off';
            }
            activeEffects[effect] = false;
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
        });
    });

    // Handle effect toggles
    document.querySelectorAll('.dropdown-item[data-effect]').forEach(item => {
        item.addEventListener('click', () => {
            const effect = item.getAttribute('data-effect');
            toggleEffect(effect, item);
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

// Ticket stub click interaction
const ticketStubs = document.querySelectorAll('.ticket-stub');

ticketStubs.forEach(ticket => {
    ticket.addEventListener('click', function() {
        const projectNumber = this.getAttribute('data-project');
        const projectTitle = this.querySelector('.ticket-title').textContent.trim();
        
        // Simple alert for now - can be replaced with modal or navigation
        console.log(`Opening project ${projectNumber}: ${projectTitle}`);
        
        // Add a subtle scale effect on click
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

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
    
    // Show easter egg on page load
    setTimeout(() => {
        showEasterEgg();
    }, 500);
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
let cursorShaderElements = null;
let cursorFeedbackTrails = [];
let cursorFeedbackPositions = [];
let cursorFeedbackRaf = null;
let activeEffects = {
    'cursor-shader': false,
    'wave-distortion': false,
    'vhs-glitch': false,
    'kaleidoscope': false,
    'static-noise': false,
    'radial-blur': false,
    'ghost-effect': false,
    'prism': false,
    'cursor-feedback': false
};

function getCursorShaderPreference() {
    return localStorage.getItem('cursorShader') === 'true';
}

function setCursorShaderPreference(enabled) {
    localStorage.setItem('cursorShader', enabled);
}

function createCursorShaders() {
    // Create SVG filter for dripping effect
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "shader-filters");
    svg.innerHTML = `
        <defs>
            <filter id="drip">
                <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="4" seed="2" result="turbulence"/>
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G"/>
                <feGaussianBlur stdDeviation="1.5"/>
            </filter>
        </defs>
    `;
    document.body.appendChild(svg);
    
    // Create three full-screen shader overlays for RGB separation
    const shaderRed = document.createElement('div');
    shaderRed.className = 'cursor-shader cursor-shader-red';
    
    const shaderGreen = document.createElement('div');
    shaderGreen.className = 'cursor-shader cursor-shader-green';
    
    const shaderBlue = document.createElement('div');
    shaderBlue.className = 'cursor-shader cursor-shader-blue';
    
    document.body.appendChild(shaderRed);
    document.body.appendChild(shaderGreen);
    document.body.appendChild(shaderBlue);
    
    return { red: shaderRed, green: shaderGreen, blue: shaderBlue, svg: svg };
}

function enableCursorShader() {
    if (!cursorShaderElements) {
        cursorShaderElements = createCursorShaders();
    }
    
    document.body.classList.add('shader-active');
}

function disableCursorShader() {
    document.body.classList.remove('shader-active');
    
    // Remove elements
    if (cursorShaderElements) {
        cursorShaderElements.red.remove();
        cursorShaderElements.green.remove();
        cursorShaderElements.blue.remove();
        if (cursorShaderElements.svg) {
            cursorShaderElements.svg.remove();
        }
        cursorShaderElements = null;
    }
}

function toggleEffect(effect, itemElement) {
    // Check if we're in Dream mode
    const currentTheme = getThemePreference();
    const isDreamMode = currentTheme === 'dark' || 
                       (currentTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (!isDreamMode) {
        alert('✨ Effects are only available in Dream mode! Switch to Dream theme to enable.');
        return;
    }
    
    const newState = !activeEffects[effect];
    activeEffects[effect] = newState;
    localStorage.setItem(effect, newState);
    
    if (newState) {
        enableEffect(effect);
        itemElement.classList.add('active');
        itemElement.querySelector('.toggle-indicator').textContent = 'On';
    } else {
        disableEffect(effect);
        itemElement.classList.remove('active');
        itemElement.querySelector('.toggle-indicator').textContent = 'Off';
    }
}

function enableEffect(effect) {
    switch(effect) {
        case 'cursor-shader':
            enableCursorShader();
            break;
        case 'wave-distortion':
            enableWaveDistortion();
            break;
        case 'vhs-glitch':
            enableVHSGlitch();
            break;
        case 'kaleidoscope':
            enableKaleidoscope();
            break;
        case 'static-noise':
            enableStaticNoise();
            break;
        case 'radial-blur':
            enableRadialBlur();
            break;
        case 'ghost-effect':
            enableGhostEffect();
            break;
        case 'prism':
            enablePrism();
            break;
        case 'cursor-feedback':
            enableCursorFeedback();
            break;
    }
}

function disableEffect(effect) {
    switch(effect) {
        case 'cursor-shader':
            disableCursorShader();
            break;
        case 'wave-distortion':
            disableWaveDistortion();
            break;
        case 'vhs-glitch':
            disableVHSGlitch();
            break;
        case 'kaleidoscope':
            disableKaleidoscope();
            break;
        case 'static-noise':
            disableStaticNoise();
            break;
        case 'radial-blur':
            disableRadialBlur();
            break;
        case 'ghost-effect':
            disableGhostEffect();
            break;
        case 'prism':
            disablePrism();
            break;
        case 'cursor-feedback':
            disableCursorFeedback();
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

// Kaleidoscope
function enableKaleidoscope() {
    const overlay = document.createElement('div');
    overlay.className = 'kaleidoscope-overlay';
    overlay.id = 'kaleidoscope-overlay';
    document.body.appendChild(overlay);
    document.body.classList.add('kaleidoscope-active');
}

function disableKaleidoscope() {
    const overlay = document.getElementById('kaleidoscope-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('kaleidoscope-active');
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

// Radial Blur
function enableRadialBlur() {
    const overlay = document.createElement('div');
    overlay.className = 'radial-blur-overlay';
    overlay.id = 'radial-overlay';
    document.body.appendChild(overlay);
    document.body.classList.add('radial-blur-active');
}

function disableRadialBlur() {
    const overlay = document.getElementById('radial-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('radial-blur-active');
}

// Ghost Effect
function enableGhostEffect() {
    const overlay = document.createElement('div');
    overlay.className = 'ghost-echo-overlay';
    overlay.id = 'ghost-overlay';
    document.body.appendChild(overlay);
    document.body.classList.add('ghost-active');
}

function disableGhostEffect() {
    const overlay = document.getElementById('ghost-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('ghost-active');
}

// Prism
function enablePrism() {
    const overlay = document.createElement('div');
    overlay.className = 'prism-overlay';
    overlay.id = 'prism-overlay';
    document.body.appendChild(overlay);
    document.body.classList.add('prism-active');
}

function disablePrism() {
    const overlay = document.getElementById('prism-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('prism-active');
}

// Cursor Feedback
function enableCursorFeedback() {
    const numTrails = 8;
    cursorFeedbackPositions = Array(numTrails).fill({ x: 0, y: 0 });
    
    // Create trail elements
    for (let i = 0; i < numTrails; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-feedback-trail';
        trail.style.opacity = (numTrails - i) / numTrails * 0.6;
        trail.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(trail);
        cursorFeedbackTrails.push(trail);
    }
    
    // Track mouse
    document.addEventListener('mousemove', updateCursorFeedbackMouse);
    
    // Start animation
    animateCursorFeedback();
}

function disableCursorFeedback() {
    // Remove event listener
    document.removeEventListener('mousemove', updateCursorFeedbackMouse);
    
    // Cancel animation
    if (cursorFeedbackRaf) {
        cancelAnimationFrame(cursorFeedbackRaf);
        cursorFeedbackRaf = null;
    }
    
    // Remove trail elements
    cursorFeedbackTrails.forEach(trail => trail.remove());
    cursorFeedbackTrails = [];
    cursorFeedbackPositions = [];
}

let currentCursorPos = { x: 0, y: 0 };

function updateCursorFeedbackMouse(e) {
    currentCursorPos.x = e.clientX;
    currentCursorPos.y = e.clientY;
}

function animateCursorFeedback() {
    if (cursorFeedbackTrails.length === 0) return;
    
    // Update first position to current cursor
    cursorFeedbackPositions[0] = { 
        x: currentCursorPos.x, 
        y: currentCursorPos.y 
    };
    
    // Each trail follows the one in front with delay
    for (let i = cursorFeedbackTrails.length - 1; i > 0; i--) {
        const current = cursorFeedbackPositions[i];
        const target = cursorFeedbackPositions[i - 1];
        
        // Smooth interpolation with delay
        cursorFeedbackPositions[i] = {
            x: current.x + (target.x - current.x) * 0.15,
            y: current.y + (target.y - current.y) * 0.15
        };
        
        // Update trail position
        const trail = cursorFeedbackTrails[i];
        trail.style.left = cursorFeedbackPositions[i].x + 'px';
        trail.style.top = cursorFeedbackPositions[i].y + 'px';
    }
    
    // Update first trail
    const firstTrail = cursorFeedbackTrails[0];
    firstTrail.style.left = cursorFeedbackPositions[0].x + 'px';
    firstTrail.style.top = cursorFeedbackPositions[0].y + 'px';
    
    cursorFeedbackRaf = requestAnimationFrame(animateCursorFeedback);
}

function initializeEffects() {
    // Check if in Dream mode
    const currentTheme = getThemePreference();
    const isDreamMode = currentTheme === 'dark' || 
                       (currentTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (!isDreamMode) return;
    
    // Initialize all effects from localStorage
    Object.keys(activeEffects).forEach(effect => {
        const saved = localStorage.getItem(effect) === 'true';
        const effectItem = document.querySelector(`[data-effect="${effect}"]`);
        
        if (saved && effectItem) {
            activeEffects[effect] = true;
            enableEffect(effect);
            effectItem.classList.add('active');
            effectItem.querySelector('.toggle-indicator').textContent = 'On';
        }
    });
}

// Initialize all effects on page load
initializeEffects();
