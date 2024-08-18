document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("scroll-blur");
    window.addEventListener("scroll", function () {
        header.classList.toggle("depois", window.scrollY >= 1);
        header.classList.toggle("antes", window.scrollY < 1);
    });
});
