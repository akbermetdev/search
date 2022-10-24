const btn = document.querySelector('.collection__btn--button')
btn.addEventListener('click', () => {
    document.querySelector('.collection__modal').style.display = 'block'
})
const close = document.querySelector('.collection__modal--bg__square--close')
close.addEventListener('click', () => {
    document.querySelector('.collection__modal').style.display = 'none'
})

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 100,
        stretch: 0,
        depth: 200,
        modifier: 5,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});