document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector("#toggleTheme");
    const element = document.querySelector("#dark-light");
    const body = document.body;
    const favicon = document.getElementById("favicon");
    const logomark = document.getElementById("logomark");
    const logomarkOff = document.getElementById("logomarkOff");

    function applyTheme(theme) {
        body.classList.toggle("theme-dark", theme === "dark");
        body.classList.toggle("theme-light", theme === "light");
        element.classList.toggle("icon-sun", theme === "dark");
        element.classList.toggle("icon-moon-star", theme === "light");

        favicon.href = theme === "dark" ? "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724266397/4_yoxeqm.png" : "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724266396/3_tc1gnn.png";
        if (logomark) {
        logomark.src = theme === "dark" ? "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724270319/Pl_8_qfvnt4.png" : "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724270319/Pl_9_ayrbyz.png";
        }
        if (logomarkOff) {
        logomarkOff.src = theme === "dark" ? "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724270319/Pl_8_qfvnt4.png" : "https://res.cloudinary.com/dn5yfai0g/image/upload/v1724270319/Pl_9_ayrbyz.png";
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
