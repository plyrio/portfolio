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

    // Referências aos elementos
    const themeToggle = document.querySelector("#toggleTheme");
    const element = document.querySelector("#dark-light");
    const body = document.body;
    const closebtn = document.querySelector("#btn-close");

    // Função para aplicar o tema inicial
    function applyTheme(theme) {
        body.classList.remove("theme-light", "theme-dark");
        body.classList.add(`theme-${theme}`);

        // Atualiza o ícone e o botão de fechar
        if (theme === "dark") {
            element.classList.remove("bi-moon-stars");
            element.classList.add("bi-brightness-high-fill");
            closebtn.classList.add("btn-close-white");
        } else {
            element.classList.remove("bi-brightness-high-fill");
            element.classList.add("bi-moon-stars");
            closebtn.classList.remove("btn-close-white");
        }
    }

    // Função para alternar o tema
    function toggleTheme() {
        const currentTheme = body.classList.contains("theme-dark") ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    // Aplica o tema preferido no carregamento
    const preferredTheme = localStorage.getItem("theme") || "light";
    applyTheme(preferredTheme);

    // Adiciona o listener para alternância de tema
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }



    var header = document.getElementById("scroll-blur");

    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;

        if (scroll >= 1) {
            header.classList.remove("antes");
            header.classList.add("depois");
        } else {
            header.classList.remove("depois");
            header.classList.add("antes");
        }
    });
});

document.querySelectorAll(".read-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const moreText =
            button.previousElementSibling.querySelector(".more-text");
        if (
            moreText.style.display === "none" ||
            moreText.style.display === ""
        ) {
            moreText.style.display = "inline";
            button.textContent = "Leia menos";
        } else {
            moreText.style.display = "none";
            button.textContent = "Leia mais";
        }
    });
});

function openModal(title, description, images) {
    document.getElementById("projectModalLabel").innerText = title;
    document.getElementById("modalText").innerText = description;
    let modalImagesContainer = document.getElementById("modalImages");
    modalImagesContainer.innerHTML = ""; // Clear any existing images

    // Set the main modal image
    let mainImage = document.getElementById("modalImage");
    mainImage.src = images[0];

    // Set the additional images
    images.forEach((src, index) => {
        if (index > 0) {
            let img = document.createElement("img");
            img.src = src;
            img.className = "img-fluid"; // Add any additional classes you want
            modalImagesContainer.appendChild(img);
        }
    });
}

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
