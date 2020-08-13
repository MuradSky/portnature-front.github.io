"use strict";

$(function () {
  var swiper = new Swiper('.intro__inner', {
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
    },
  });
  var modalCertiv = $('.modal-certification'),
      modalCerBox = $('.modal-certification__box');
  function modalCerHide() {
    setTimeout(function () {
      modalCertiv.css('display', 'none');
    }, 1000);
  }
  $('.modal-certification__close').on('click', function () {
    modalCertiv.animate({
      opacity: 0
    }, 500);
    modalCerHide();
  });
  setTimeout(function () {
    modalCertiv.css('display', 'flex');
  }, 1000);
  $(document).on('mouseup', function (e) {
    if (!modalCerBox.is(e.target) && modalCerBox.has(e.target).length === 0) {
      modalCertiv.animate({
        opacity: 0
      }, 500);
      modalCerHide();
    }
  });
});