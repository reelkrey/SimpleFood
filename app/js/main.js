$(function(){

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.select-style').styler();

  $('.reviews__slider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      prevArrow: '<button type="button" class="reviews__arrow reviews__arrow--prev"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
      nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
      autoplay: true,
      autoplaySpeed: 10000
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 576) {
      $('.restaurants__list').slick({
        centerMode: false,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $('.restaurants__list.slick-initialized').slick('unslick');
    }
  });
});
  
var mixer = mixitup('.pop-categories__content');

const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');
const bodyLock = document.querySelector('body');
const burgerClose = document.querySelector('.burger-mobile');

document.addEventListener('DOMContentLoaded', () => {

  burger.addEventListener('click',  () => {
    mobileMenu.classList.add('mobile-menu--active');
    bodyLock.classList.add('lock');
  });

  burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
    bodyLock.classList.remove('lock');
  });
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == mobileMenu || mobileMenu.contains(target);
  let its_hamburger = target == burger;
  let menu_is_active = mobileMenu.classList.contains('mobile-menu--active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    mobileMenu.classList.remove('mobile-menu--active');
    bodyLock.classList.remove('lock');
  }
})
  
  

