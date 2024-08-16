document.addEventListener("DOMContentLoaded", function () {
    const tpwriter = document.getElementById("typewriter");
    const themeToggle = document.querySelector("#toggleTheme");
    const element = document.querySelector("#dark-light");
    const body = document.body;
    const closebtn = document.querySelector("#btn-close");
    const header = document.getElementById("scroll-blur");

    ;
    
    // Typewriter initialization
    if (tpwriter) {
      new Typewriter(tpwriter, {
            autoStart: true,
            cursor: "",
        }).typeString("Oi, eu sou Pedro <div class='wave'>👋</div>").start();
    }
 

    // Theme application
    function applyTheme(theme) {
        body.classList.toggle("theme-dark", theme === "dark");
        body.classList.toggle("theme-light", theme === "light");
        element.classList.toggle("icon-sun", theme === "dark");
        element.classList.toggle("icon-moon-star", theme === "light");
        closebtn.classList.toggle("btn-close-white", theme === "dark");
    }

    // Toggle theme
    function toggleTheme() {
        const newTheme = body.classList.contains("theme-dark") ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    // Apply preferred theme on load
    applyTheme(localStorage.getItem("theme") || "light");

    // Add event listeners
    themeToggle?.addEventListener("click", toggleTheme);

    window.addEventListener("scroll", function () {
        header.classList.toggle("depois", window.scrollY >= 1);
        header.classList.toggle("antes", window.scrollY < 1);
    });
});;

// Swiperjs initialization
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 2, spaceBetween: 80 },
    },
});
