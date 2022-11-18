$(function(){

    // $('.навзвание класса').slick({
        // dots: true,
        // arrows: false, 
        // fade: true плвность 
        // autoplay: true,
        // autoplaySpeed: 2000
    // });

    $('.reviews__slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
        autoplay: true,
        autoplaySpeed: 10000
    });
});

var mixer = mixitup('.pop-categories__content');






