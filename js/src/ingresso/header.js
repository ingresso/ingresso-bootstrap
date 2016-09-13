;(function(){

  // settimeout because of w3data.js include system
  setTimeout(function(){

    // search suggestions
    var $headerSearchInput = $('#header #search-ipt');
    var $headerSearch = $headerSearchInput.closest('.hd-search');
    var $toggleItems = $('#header .hd-mm-lnk, #header .hd-local-link, #header .hd-um-link');

    // generic close collapse
    $('[data-close-collapse]').click(function(){
      $(this).closest('.collapse.in').collapse('hide');
    });

    $headerSearchInput
    .focus(function(){
      $headerSearch.addClass('is-opened');
      console.log('focus');
    });
    // remove class  and collapse items when click out
    $(document).on('click',function(e){

      if(!$(e.target).closest('.hd-search').length){
        $headerSearch.removeClass('is-opened');
      }

      if($('#header .collapse.in').length && !$(e.target).closest('#header .collapse.in').length){
        $('#header .collapse.in').collapse('hide');
      }
    });
    // end - search suggestions

    // toggle items
    $('#header .hd-cont').on('show.bs.collapse',function(e){
      console.log('show');
      /*
      var $expandedItem = $toggleItems.filter('[aria-expanded=true]');

      if($expandedItem.length && $(e.target).is($(this))){
        $($expandedItem.attr('href')).collapse('hide');
      }*/
    });
    $('#header .hd-cont').on('hide.bs.collapse',function(){
      console.log('hide');
    });
    // end - toggle items
  },2000);



})();
