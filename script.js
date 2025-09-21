const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const menuOverlay = document.getElementById('menu-overlay');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        mobileMenu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

menuOverlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');
const currentLangSpan = document.getElementById('current-lang');
const languageOptions = document.querySelectorAll('.language-option');

const currentLanguage = localStorage.getItem('language') || 'tr';

setLanguage(currentLanguage);

languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('active');
    }
});

languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        localStorage.setItem('language', lang);
        languageDropdown.classList.remove('active');
    });
});

function setLanguage(lang) {
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    currentLangSpan.textContent = lang.toUpperCase();
    
    document.querySelectorAll('[data-tr]').forEach(element => {
        const trText = element.getAttribute('data-tr');
        const enText = element.getAttribute('data-en');
        
        if (lang === 'tr' && trText) {
            element.textContent = trText;
        } else if (lang === 'en' && enText) {
            element.textContent = enText;
        }
    });
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});