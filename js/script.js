document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================================
    // --- LÓGICA DO MODO ESCURO (DARK MODE) ---
    // ===========================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');

        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                body.classList.remove('dark-mode');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        };

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        }

        themeToggle.addEventListener('click', () => {
            let newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ===========================================
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    // ===========================================
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        // Evento para ABRIR/FECHAR o menu com o botão
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('nav-active');
        });

        // Evento para FECHAR o menu ao clicar em um link
        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('nav-active');
            });
        });
    }

    // ===========================================
    // --- LÓGICA DO LINK ATIVO NA NAVEGAÇÃO ---
    // ===========================================
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('#main-menu a');

    navLinks.forEach(link => {
        // Lógica para determinar o link ativo (ajustada para ser mais robusta)
        const linkHref = link.getAttribute('href').split("/").pop();
        let isActive = (linkHref === currentPage);

        const isNucleoPage = currentPage.includes('nucleo-') || currentPage.includes('nucelo-');
        const isOQueFazemosLink = link.getAttribute('href').includes('o-que-fazemos') || link.getAttribute('href').includes('oque-fazemos');

        if (isNucleoPage && isOQueFazemosLink) {
            isActive = true;
        }

        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});