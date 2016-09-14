;(function(){

  // settimeout because of w3data.js include system
  setTimeout(function(){

    var $headerSearchInput = $('#header #search-ipt');
    var $headerSearch = $headerSearchInput.closest('.hd-search');
    var $toggleItems = $('#header .hd-mm-lnk, #header .hd-local-link, #header .hd-um-link');

    function toggleCloseButton(){
      $('[href="#'+$(this).attr('id')+'"]').find('.svg-icon').toggleClass('hidden-xs-up');
    }

    // generic close collapse
    $('[data-close-collapse]').click(function(){
      $(this).closest('.collapse.in').collapse('hide');
    });

    // search suggestions
    $headerSearchInput
    .focus(function(){
      $headerSearch.addClass('is-opened');
      console.log('focus');
    });
    // remove class and collapse items when click out
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
    $('#header .hd-cont')
    .on('show.bs.collapse',function(){
      toggleCloseButton.call(this);
      if(!$('body.page-overlay').length){
        $('body').addClass('page-overlay');
      }
    })
    .on('hide.bs.collapse',function(){
      toggleCloseButton.call(this);
      if($('body.page-overlay').length){
        $('body').removeClass('page-overlay');
      }
    });
    // end - toggle items
  },2000);



})();
