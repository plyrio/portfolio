document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector("#toggleTheme");
    const element = document.querySelector("#dark-light");
    const body = document.body;
    const closebtn = document.querySelector("#btn-close");

    function applyTheme(theme) {
        body.classList.toggle("theme-dark", theme === "dark");
        body.classList.toggle("theme-light", theme === "light");
        element.classList.toggle("icon-sun", theme === "dark");
        element.classList.toggle("icon-moon-star", theme === "light");
        closebtn.classList.toggle("btn-close-white", theme === "dark");
    }

    function toggleTheme() {
        const newTheme = body.classList.contains("theme-dark") ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    applyTheme(localStorage.getItem("theme") || "light");

    themeToggle?.addEventListener("click", toggleTheme);
});
