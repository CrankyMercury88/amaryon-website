// Create continuous waterfall streams
function createWaterfallStreams() {
    const container = document.querySelector('.waterfall-container');
    const screenWidth = window.innerWidth;
    const numberOfStreams = Math.floor(screenWidth / 80); // Stream every 80px
    
    // Clear existing streams
    const existingStreams = container.querySelectorAll('.waterfall-stream');
    existingStreams.forEach(stream => stream.remove());
    
    for (let i = 0; i < numberOfStreams; i++) {
        const stream = document.createElement('div');
        stream.className = 'waterfall-stream';
        
        // Position streams across the screen width
        const position = (i * (screenWidth / numberOfStreams)) + (Math.random() * 40 - 20);
        stream.style.left = position + 'px';
        
        // Vary stream properties for natural look
        const width = 5 + Math.random() * 8;
        const opacity = 0.4 + Math.random() * 0.4;
        const animationDuration = 2.5 + Math.random() * 1.5;
        
        stream.style.width = width + 'px';
        stream.style.opacity = opacity;
        stream.style.animationDuration = animationDuration + 's';
        stream.style.animationDelay = -(Math.random() * animationDuration) + 's';
        
        container.appendChild(stream);
    }
}

// Initialize waterfall
window.addEventListener('load', () => {
    createWaterfallStreams();
});

// Recreate streams on window resize
window.addEventListener('resize', () => {
    createWaterfallStreams();
});

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

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(255,255,255,0.1)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.boxShadow = 'none';
    }
});