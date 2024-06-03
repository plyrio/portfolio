function toggleTheme() {
    const element = document.querySelector('#dark-light');
    const body = document.body;

    if (element.classList.contains('bi-moon-stars')) {
        // Mudar para Dark
        element.classList.remove('bi-moon-stars');
        element.classList.add('bi-brightness-high-fill');
        body.classList.remove('theme-light'); // Remove a classe do tema claro
        body.classList.add('theme-dark'); // Adiciona a classe do tema escuro
    } else if (element.classList.contains('bi-brightness-high-fill')) {
        // Mudar para Light
        element.classList.remove('bi-brightness-high-fill');
        element.classList.add('bi-moon-stars');
        body.classList.remove('theme-dark'); // Remove a classe do tema escuro
        body.classList.add('theme-light'); // Adiciona a classe do tema claro
    }
}


document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);

// fazer a navbar ficar transparente
window.onscroll = scroll;
const element = document.querySelector('#antes', '#depois');

function scroll() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > 30) {
        try {
            document.getElementById('antes').id = 'depois'
            element.classList.add('border-bottom');
        } catch (e) {
            false
        }
    } else {
        try {
            document.getElementById('depois').id = 'antes'
            element.classList.remove('border-bottom');
        } catch (e) {
            false
        }
    }
}


