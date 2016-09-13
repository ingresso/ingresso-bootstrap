;(function(){

  setTimeout(function(){

    // search suggestions
    var $headerSearchInput = $('#header #search-ipt');
    var $headerSearch = $headerSearchInput.closest('.hd-search');

    $headerSearchInput
    .focus(function(){
      $headerSearch.addClass('is-opened');
      console.log('focus');
    });
    // remove class when click out
    $(document).on('click',function(e){

      if(!$(e.target).closest('.hd-search').length){
        $headerSearch.removeClass('is-opened');
      }
    });
    // toggle item when openening another
    var $toggleItems = $('#header [data-toggle=collapse]');

    $('#header .hd-cont').on('show.bs.collapse',function(){
      var $expandedItem = $('#header [data-toggle=collapse]').filter('[aria-expanded=true]');

      if($expandedItem.length){
        $($expandedItem.attr('href')).collapse('hide');
      }
    });
  },2000);



})();
