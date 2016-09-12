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

    // header menu
    $('#header .hd-mm-lnk').click(function(){

      var $expandedItem = $('#header .hd-mm-lnk').filter('[aria-expanded=true]');

      if($expandedItem.length){
        $expandedItem.collapse('hide');
      }
    });
  },2000);



})();
