// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.main__menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 99991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


const swiper = new Swiper('.swiper', {

    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',
    },
    // spaceBetween: 40,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {

    1000: {
        slidesPerView: 2,
    },
    1450: {
            slidesPerView: 3,
        }
    }
});