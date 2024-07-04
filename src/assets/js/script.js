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
            element.classList.remove("bi-bightness-high-fill");
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

window.addEventListener("scroll", function () {
        let element = document.getElementById("antes") || document.getElementById("depois");

        if (!element) return;

        var scrollTop = window.scrollY;
        if (scrollTop > 10) {
            try {
                if (element.id === "antes") {
                    element.id = "depois";
                }
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                if (element.id === "depois") {
                    element.id = "antes";
                }
            } catch (e) {
                console.error(e);
            }
        }
    });

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




});
