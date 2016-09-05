;(function(){
  /* esse timeout e por causa do do static. Tudo por causa de um plugin chamado w3-include.js*/
  setTimeout(function(){
    // Slide page component
    $('[data-slide-page-link], [data-slide-page-back]').each(function () {
      var $el = $(this);


      if (typeof $el.attr('data-slide-page-link') == 'string'){

        var _$page = $($el.attr('data-slide-page-link'));

        _$page.on('transitionend',function(){
          _$page.removeClass('is-animating');
        });

        $el.click(function (e) {
          _$page
          .addClass('is-animating')
          .toggleClass('active')
          .find('> .slide-page-wp > [data-slide-page-side]')
          .toggleClass('active')
        })


      }
      else {
        var _$page = $($el.attr('data-slide-page-back'));
        $el.click(function (e) {
          _$page
          .addClass('is-animating')
          .toggleClass('active')
          .find('> .slide-page-wp > [data-slide-page-side]')
          .toggleClass('active')
        })
      }

    })
  },3000)
})()
