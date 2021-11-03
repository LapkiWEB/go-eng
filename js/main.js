$(function () {

    $('.menu__btn').on('click', (function () {
        if (!$('.menu__wrapper').hasClass('openDone')) {
            $('.menu__wrapper').addClass('openDone');
        } else {
            $('.menu__wrapper').removeClass('openDone');
        }
        if (!$('.menu__btn').hasClass('active')) {
            $('.menu__btn').addClass('active');
        } else {
            $('.menu__btn').removeClass('active');
        }
    }));


})