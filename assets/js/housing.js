$(function(){
    var swiper = new Swiper('.standart-room__slider', {
        grabCursor: true,
        slidesPerView: 'auto',
        pagination: {
          el: '.pagination-top.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 2000,
        },
    });
    var swiper = new Swiper('.family-room__slider', {
        grabCursor: true,
        slidesPerView: 'auto',
        pagination: {
          el: '.pagination-center.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
    var swiper = new Swiper('.king-suite__slider', {
        grabCursor: true,
        slidesPerView: 'auto',
        pagination: {
          el: '.pagination-bottom.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 4000,
        },
    });
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery : true, 
        thumb_attr: 'data-lcl-thumb', 
        skin: 'dark',
    }); 
})