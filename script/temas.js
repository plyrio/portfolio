
// Mudar tema da pagina
function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}

function toggleLightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
}


// fazer a navbar ficar transparente
window.onscroll = scroll;

function scroll() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > 30) {
        try {
            document.getElementById('antes').id = 'depois'
        } catch (e) {
            false
        }
    } else {
        try {
            document.getElementById('depois').id = 'antes'
        } catch (e) {
            false
        }
    }
}