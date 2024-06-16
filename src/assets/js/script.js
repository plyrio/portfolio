const Typewriter = require('typewriter-effect/dist/core');

document.addEventListener("DOMContentLoaded", function() {
    const tpwriter = document.getElementById('typewriter');

    if (tpwriter) {
        const typewriter = new Typewriter(tpwriter, {
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 20,
        });

        typewriter
            .pauseFor(2500)
            .typeString('Olá, eu sou o Pedro Lyrio')
            .pauseFor(300)
            .deleteChars(10)
            .typeString('<strong>Desenvolvedor Web</strong>  ')
            .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
            .pauseFor(1000)
            .start();
    }

    function toggleTheme() {
        const element = document.querySelector('#dark-light');
        const body = document.body;

        if (element.classList.contains('bi-moon-stars')) {
            // Mudar para Dark
            element.classList.remove('bi-moon-stars');
            element.classList.add('bi-brightness-high-fill');
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
        } else if (element.classList.contains('bi-brightness-high-fill')) {
            // Mudar para Light
            element.classList.remove('bi-brightness-high-fill');
            element.classList.add('bi-moon-stars');
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
        }
    }

    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    window.onscroll = scroll;
    const element = document.getElementById('antes');

    function scroll() {
        var scrollTop = window.pageYOffset;
        if (scrollTop > 30) {
            try {
                document.getElementById('antes').id = 'depois';
                element.classList.add('border-bottom');
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                document.getElementById('depois').id = 'antes';
                element.classList.remove('border-bottom');
            } catch (e) {
                console.error(e);
            }
        }
    }
});
