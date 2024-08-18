document.addEventListener("DOMContentLoaded", function () {
    const tpwriter = document.getElementById("typewriter");
    if (tpwriter) {
        new Typewriter(tpwriter, {
            autoStart: true,
            cursor: "",
        }).typeString("Oi, eu sou Pedro <div class='wave'>👋</div>").start();
    }
});
