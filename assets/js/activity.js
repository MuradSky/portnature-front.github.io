"use strict";

$(function () {
  lc_lightbox('.elem', {
    wrap_class: 'lcl_fade_oc',
    gallery: true,
    thumb_attr: 'data-lcl-thumb'
  });
  $('.activity__video').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('activity__video_click');
  });
});