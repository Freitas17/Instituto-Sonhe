document.addEventListener('DOMContentLoaded', function() {
    // Ativar link de navegação da página atual
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Efeito suave de rolagem (se necessário para âncoras)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Ativar link de navegação da página atual
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        // Lógica para ativar o link pai "O que Fazemos" nas páginas dos núcleos
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else if (linkHref === 'o-que-fazemos.html' && 
                   (currentPage === 'nucleo-sertao.html' || 
                    currentPage === 'nucleo-prudente.html' || 
                    currentPage === 'nucleo-africa.html')) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('nav-active');
        });
    }

    // --- LÓGICA DO LINK ATIVO NA NAVEGAÇÃO ---
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('#main-menu a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Remove a classe de todos primeiro para evitar múltiplos ativos
        link.classList.remove('active');

        // Adiciona a classe ao link da página atual
        if (linkHref === currentPage) {
            link.classList.add('active');
        } 
        // Condição especial para as páginas de "núcleos"
        else if (linkHref === 'o-que-fazemos.html' && 
                   (currentPage === 'nucleo-sertao.html' || 
                    currentPage === 'nucleo-prudente.html' || 
                    currentPage === 'nucleo-africa.html')) {
            link.classList.add('active');
        }
    });

});

