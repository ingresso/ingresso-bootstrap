/* temp js to show filter beahavior */
;(function(){
  /* temp code - for behavior purpose */
  $('.filter').each(function(){
    var $filter = $(this);
    var $head = $('[data-toggle="collapse"]',this);
    var $options = $('[role=option]',this);
    var $removeButton = $('.filter-action',this);

    function getFilterValue(){
      return $head.children('.filter-val').text();
    }

    function addItem(val){
      if(getFilterValue() !== val){
        $head.children('.filter-val').text(val);
        $options.filter('.is-selected').removeClass('is-selected');
        $(this).closest('.filter-it').addClass('is-selected');
        $filter.addClass('filter-has-val');
      }

    }
    function removeItem(){
      $head.children('.filter-val').text('');
      $options.filter('.is-selected').removeClass('is-selected');
      $filter.removeClass('filter-has-val');
    }

    $('a',$options).click(function(){
      addItem.call(this,$(this).attr('data-val') || $(this).text());
      $head.closest('.tab-accordion').addClass('filter-selected');
    });

    $removeButton.on('click',function(e){
      removeItem.call(this);
      e.stopPropagation();
    });

  });

})();
