new Swiper('.image-slider02', {
    /* стрелки */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    /* Навигация */
    pagination: {
        el: '.swiper-pagination',
        /* Буллеты */
        /* clickable: true, */
        /* Динамические буллеты */
        /* dynamicBullets: true, */
        // Кастомные буллеты
        /* renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'; */
        },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 2000,
        /* 3d effects */
    /* effect: 'cube', */
/*     cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    } */
    /* Эффект потока */
    /* effects: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    }, */
    autoHeight: true,
    // Количество слайдов для показа
    slidesPerView: 6,
    slidesPerGroup: 2,

    //Активный слайд по центру
/*     centeredSlides: true,
 */
    spaceBetween: 21,    
});
