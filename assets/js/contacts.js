"use strict";

$(function () {
  var form = $('#form'),
      formResult = $('.form__result'),
      formResultClose = $('.form__result_close'),
      formBtn = $('.form__btn');
  form.validate({
    rules: {
      name: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      topic: {
        required: true,
        minlength: 5
      },
      message: {
        required: true,
        minlength: 10
      }
    }
  });
  formBtn.on('click', function (e) {
    e.preventDefault();

    if (form.valid()) {
      $.ajax({
        url: 'http://httpbin.org/post',
        type: 'post',
        data: form.serialize(),
        beforeSend: function beforeSend(xhr, textStatus) {
          $('form#form :input').attr('disabled', 'disabled');
          $('.form__btn-load').css('visibility', 'visible');
        },
        success: function success(response) {
          setTimeout(function () {
            $('form#form :input').removeAttr('disabled');
            $('form#form :text, textarea').val('').removeClass('error').text('');
            formResult.children('.form__result-text').text('Success');
            formResult.css('opacity', 1);
            formResult.removeClass('form__result_false');
            $('.form__btn-load').css('visibility', 'hidden');
          }, 1500);
        }
      });
    } else {
      formResult.children('.form__result-text').text('Validation errors have occurred. Please confirm the fields and resubmit.');
      formResult.addClass('form__result_false');
      formResult.css('opacity', 1);
    }
  });
  formResultClose.on('click', function () {
    formResult.css('opacity', 0);
  });
});