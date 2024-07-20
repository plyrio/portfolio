document.addEventListener("DOMContentLoaded", function () {
    const tpwriter = document.getElementById("typewriter");

    if (tpwriter) {
        const typewriter = new Typewriter(tpwriter, {
            autoStart: true,
            delay: 120,
        });

        typewriter
            .typeString("Oi, eu sou o Pedro Lyrio <span>&#128075</span>")
            .start();
    }

    function toggleTheme() {
        const element = document.querySelector("#dark-light");
        const body = document.body;
        const closebtn = document.querySelector("#btn-close")

        if (element.classList.contains("bi-moon-stars")) {
            // Mudar para Dark
            element.classList.remove("bi-moon-stars");
            element.classList.add("bi-brightness-high-fill");

            body.classList.remove("theme-light");
            body.classList.add("theme-dark");

            closebtn.classList.add("btn-close-white");

        } else if (element.classList.contains("bi-brightness-high-fill")) {
            // Mudar para Light
            element.classList.remove("bi-brightness-high-fill");
            element.classList.add("bi-moon-stars");

            body.classList.remove("theme-dark");
            body.classList.add("theme-light");

            closebtn.classList.remove("btn-close-white");
        }
    }

    const themeToggle = document.querySelector("#toggleTheme");
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var header = document.querySelector('antes');

        window.addEventListener('scroll', function () {
            var scroll = window.scrollY;

            if (scroll >= 1) {
                header.classList.remove('antes');
                header.classList.add('depois');
            } else {
                header.classList.remove('depois');
                header.classList.add('antes');
            }
        });
    });

})


document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const moreText = button.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            button.textContent = 'Leia menos';
        } else {
            moreText.style.display = 'none';
            button.textContent = 'Leia mais';
        }
    });
});



// Swiperjs
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
    },
});