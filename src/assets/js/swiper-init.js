new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 40 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 2, spaceBetween: 80 },
    },
});
