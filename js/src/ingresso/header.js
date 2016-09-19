;(function(){

    var $header = $('#header');
    var $headerSearchInput = $('#search-ipt',$header);
    var $headerSearch = $headerSearchInput.closest('.hd-search');
    var $toggleItems = $('#header .hd-mm-lnk, #header .hd-local-link, #header .hd-um-link');
    var $window = $(window);
    var resolutions = {
      small:568,
      medium:769,
      large:992
    };

    function toggleCloseButton(){
      $('[href="#'+$(this).attr('id')+'"]').find('.svg-icon').toggleClass('hidden-xs-up');
    }

    function toggleFilter(){
      $('.collapse.in',this).collapse('hide');
    }

    // generic close collapse button
    $('[data-close-collapse]').click(function(){
      $(this).closest('.collapse.in').collapse('hide');
    });

    // search suggestions
    $headerSearchInput
    .focus(function(){
      $headerSearch.addClass('is-opened');
      console.log('focus');
    });
    // remove classes and collapse items when click out
    $(document).on('click',function(e){
      // if not clicking on search content
      if(!$(e.target).closest('.hd-search').length){
        $headerSearch.removeClass('is-opened');
      }
      // if not clicking on some header collapsable content
      if($('#header .hd-cont.collapse.in, #header .hd-cont.collapsing').length && !$(e.target).closest('#header .hd-cont.collapse.in').length){
        $('#header .hd-cont.collapse.in').collapse('hide');
      }
    });
    // end - search suggestions

    // toggle items
    $('.hd-cont',$header)
    .on('show.bs.collapse',function(){
      toggleCloseButton.call(this);
      if(!$('body.page-overlay').length && $(window).width() < resolutions.large){
        $('body').addClass('page-overlay');
      }
    })
    .on('hide.bs.collapse',function(){
      toggleCloseButton.call(this);
    })
    .on('hidden.bs.collapse',function(){
      if($('body.page-overlay').length && !$('.hd-cont.collapse.in',$header).length){
        $('body').removeClass('page-overlay');
      }
    });
    $window.resize(function(){
      if($window.width() < resolutions.large){

        // overlay class
        if($('.hd-cont.collapse.in',$header).length){
          $('body').addClass('page-overlay');
        }else{
          $('body').removeClass('page-overlay');
        }

        // filter
      }else{
        $('.filter').off('filter.added').on('filter.added',toggleFilter);
      }
    })
    // end - toggle items
    // filter
    $('.filter',$header).on('filter.added',toggleFilter);
    // end -filter

    // fixed header
    $window.scroll(function(){

      if($window.scrollTop() > $header.outerHeight() && !$('.hd-cont.collapse.in',$header).length){
        $header.addClass('is-reduced is-reducing');
      }else if($header.hasClass('is-reduced')){
        $header
        .removeClass('is-reduced')
        .addClass('is-reducing');
      }
    })
    $header.on('transitionend',function(){
      $header.removeClass('is-reducing');
    });
    // end - fixed header

})();
