// swiper
;(function(){
  $('[data-ride="swiper-ingresso"], [data-ride="swiper-ingresso-side"]').each(function () {
    var $elm = $(this);

    var options = {
      carousel:{
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      },
      thumbs:{
        slideToClickedSlide: true,
        slidesPerView: 4,
        spaceBetween: 10,
        touchRatio: 0.2,
        centeredSlides:true
      }
    };


    if ($elm.attr('data-ride') == 'swiper-ingresso-side') {
      options.thumbs = $.extend({}, { direction:'vertical', setWrapperSize:true }, options.thumbs);
    }
    else {
      options.thumbs = $.extend({}, {
        centeredSlides: true,
        breakpoints: {
          // >= 320
          320: {
            slidesPerView: 2,
            spaceBetweenSlides: 5
          },
          // >= 544
          544:{
            slidesPerView: 3,
            spaceBetweenSlides: 5
          },
          // >= 768
          768: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
          }
        }
      }, options.thumbs);
    }
    var galleryTop = new Swiper($('.gallery-top', $elm), options.carousel);
    var galleryThumbs = new Swiper($('.gallery-thumbs', $elm), options.thumbs);

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

  });
  
})();