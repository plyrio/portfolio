document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector("#toggleTheme");
    const element = document.querySelector("#dark-light");
    const body = document.body;
    const favicon = document.getElementById("favicon");
    const logomark = document.getElementById("logomark");
    const logomarkOff = document.getElementById("logomarkOff");
    const projeto2 = document.getElementById("projeto2");

    function applyTheme(theme) {
        body.classList.toggle("theme-dark", theme === "dark");
        body.classList.toggle("theme-light", theme === "light");
        element.classList.toggle("icon-sun", theme === "dark");
        element.classList.toggle("icon-moon-star", theme === "light");

        projeto2.src = theme === "dark" ? "https://res.cloudinary.com/dn5yfai0g/image/upload/v1736299988/Component_1_light_szl7oo.png" : "https://res.cloudinary.com/dn5yfai0g/image/upload/v1736299859/Component_1_zbd9gg.png";
        favicon.href = theme === "dark" ? "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724326794/5_wn6vhe.png" : "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724326794/4_cg8tol.png";
        if (logomark) {
        logomark.src = theme === "dark" ? "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724326820/Pl_11_wrznzp.png" : "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724326821/Pl_10_rthobz.png";
        }
        if (logomarkOff) {
        logomarkOff.src = theme === "dark" ? "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724326820/Pl_11_wrznzp.png" : "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724326821/Pl_10_rthobz.png";
            }
    
    }

    function toggleTheme() {
        const newTheme = body.classList.contains("theme-dark") ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    applyTheme(localStorage.getItem("theme") || "light");

    themeToggle?.addEventListener("click", toggleTheme);
});
