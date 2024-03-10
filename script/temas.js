
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

// sweeper

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});