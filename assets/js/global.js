"use strict";
$(function () {
  
  $(window).on('scroll load', function () {
    var headerHieght = $('.header');
    var scrollTop = $(document).scrollTop();

    if (scrollTop > headerHieght.outerHeight()) {
      headerHieght.addClass('header_fixed');
    } else {
      headerHieght.removeClass('header_fixed');
    }
  });
  $(window).on('scroll load', function () {
    var scrollTop = $(document).scrollTop(),
        btnUp = $('.arrowUp');

    if (scrollTop > 400) {
      btnUp.addClass('arrowUp_active');
    } else {
      btnUp.removeClass('arrowUp_active');
    }
  });
  function menuClose() {
    $('.shadow').removeClass('shadow_active');
    mainMenu.removeClass('main-menu_show');
  }
  var mainMenu = $('.main-menu');
  $('.menu__btn').on('click', function () {
    mainMenu.addClass('main-menu_show');
    $('.shadow').addClass('shadow_active');
  });
  $('.main-menu__close').on('click', function () {
    menuClose();
  });
  $(document).on('mouseup', function (e) {
    if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0) {
      menuClose();
    }
  });

  $('.arrowUp').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('arrowUp_active_click');
    var el = $(this).attr('href');
    el = el.replace(/[^\#]*/, '');
    setTimeout(function () {
      $('html, body').animate({
        scrollTop: $(el).offset().top
      }, 500);
      $('.arrowUp').removeClass('arrowUp_active_click');
    }, 500);
    return false;
  });
  new WOW().init();
});