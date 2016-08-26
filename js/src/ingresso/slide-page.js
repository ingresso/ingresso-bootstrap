;(function(){
  setTimeout(function(){
    // Slide page component
    $('[data-slide-page-link], [data-slide-page-back]').each(function () {
      var $el = $(this);

      if (typeof $el.attr('data-slide-page-link') == 'string'){
        var _$link = $($el.attr('data-slide-page-link'));
        $el.click(function (e) {

          _$link.toggleClass('active')
          .find('> .slide-page-wp > [data-slide-page-side]')
          .toggleClass('active')
        })
      }
      else {
        var _$link = $($el.attr('data-slide-page-back'));
        $el.click(function (e) {

          _$link.toggleClass('active')
          .find('> .slide-page-wp > [data-slide-page-side]')
          .toggleClass('active')
        })
      }
    })
  },3000)
})()
