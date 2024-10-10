document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Theme toggle functionality
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌓';
    themeToggle.classList.add('theme-toggle');
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Add hover effect to list items
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        });

        item.addEventListener('mouseleave', () => {
            item.style.color = '';
        });
    });

    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('.background-animation').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Add tilt effect to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mousemove', (e) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            const dx = x - xc;
            const dy = y - yc;
            
            section.style.transform = `perspective(1000px) rotateX(${dy / -20}deg) rotateY(${dx / 20}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = '';
        });
    });

    // Add typing effect to tagline
    const tagline = document.querySelector('.tagline');
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});