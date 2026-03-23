
// AMÉLIORATIONS UX - 225 E-SPORTS LEAGUE
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. BOUTON MODE SOMBRE / CLAIR
    const themeToggle = document.createElement('div');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌓';
    themeToggle.title = 'Changer de thème (Clair / Sombre)';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.userSelect = 'none';
    document.body.appendChild(themeToggle);

    // Charger le thème précédemment choisi
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '☀️' : '🌓';
    });

    // 2. BOUTON RETOUR EN HAUT
    const backToTop = document.createElement('div');
    backToTop.id = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = 'Retour en haut';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. ANIMATION FLUIDE DES LIENS D'ANCRE
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. EFFET DE RÉVÉLATION AU SCROLL (SCROLL REVEAL)
    const revealElements = document.querySelectorAll('.team-card, .info-section, .reseau-card, .video-card, .photo-card');
    const revealOnScroll = function() {
        const triggerBottom = window.innerHeight * 0.9;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Style initial pour l'animation
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Lancer une fois au chargement
});
