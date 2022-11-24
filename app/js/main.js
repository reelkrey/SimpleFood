$(function(){

  $('.reviews__slider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      prevArrow: '<button type="button" class="reviews-arrow reviews-arrow--prev"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
      nextArrow: '<button type="button" class="reviews-arrow reviews-arrow--next"><svg><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
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
      $('.restaurants__list').slick('unslick');
    }
  });
});
  
var mixer = mixitup('.pop-categories__content');
  
  
document.addEventListener('DOMContentLoaded', () => {	
  
  const burger = document.querySelector('.burger'); 
  
  burger.addEventListener('click', () => {
  
  burger.classList.toggle('burger--active'); 
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const bodyLock = document.querySelector('body');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--active'); 
    if (mobileMenu.classList.contains('mobile-menu--active')) {
      burger.classList.add('burger--active');
      bodyLock.classList.add('lock'); 
    }
    else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock'); 
    }
  });
});

document.addEventListener('click', function (e) {
  if (e.target !== burger && e.target !== mobileMenu) {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('mobile-menu--active');
    bodyLock.classList.remove('lock');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerMobile = document.querySelector('.burger--mobile');
  const mobileMenu = document.querySelector('.mobile-menu');
  const bodyLock = document.querySelector('body');

  burgerMobile.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--active');
    bodyLock.classList.remove('lock');
  });
});

document.addEventListener('DOMContentLoaded', () => {	
  
  const burgerMobile = document.querySelector('.burger--mobile'); 
  const burgerDesk = document.querySelector('.burger--desktop')
  
  burgerMobile.addEventListener('click', () => {
  
  burgerDesk.classList.remove('burger--active'); 
  });
});
