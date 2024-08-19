document.addEventListener("DOMContentLoaded", function () {
    const tpwriter = document.getElementById("typewriter");
    if (tpwriter) {
        new Typewriter(tpwriter, {
            autoStart: true,
            cursor: "",
        }).typeString('Oi, eu sou Pedro <img  class="wave" src="https://res.cloudinary.com/dn5yfai0g/image/upload/v1723995570/hand-wave_mp4gm2.png" />').start();
    }
});
