
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 10000,
    //     disableOnInteraction: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});