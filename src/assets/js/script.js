document.addEventListener("DOMContentLoaded", function () {
    const tpwriter = document.getElementById("typewriter");

    if (tpwriter) {
        const typewriter = new Typewriter(tpwriter, {
            autoStart: true,
            delay: 70,
        });

        typewriter
            .typeString("<h2>Olá, eu sou o <strong> Pedro Lyrio &#128075</strong></br><h3>Desenvolvedor Web</h3></h2>")
        .start();
    }

    function toggleTheme() {
        const element = document.querySelector("#dark-light");
        const body = document.body;

        if (element.classList.contains("bi-brightness-high-fill")) {
            // Mudar para Dark
            element.classList.remove("bi-brightness-high-fill");
            element.classList.add("bi-moon-stars");
            
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
        } else if (element.classList.contains("bi-moon-stars")) {
            // Mudar para Light
            element.classList.remove("bi-moon-stars");
            element.classList.add("bi-brightness-high-fill");
            
            body.classList.remove("theme-dark");
            body.classList.add("theme-light");
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
});
