/* temp js to show filter beahavior */
;$(function(){
  /* temp code - for behavior purpose */
  $('.filter').each(function(){
    var $filter = $(this);
    var $head = $('[data-toggle="collapse"]',this);
    var $options = $('.list-group-item',this);
    var $removeButton = $('.filter-action',this);

    function getFilterValue(){
      return $head.children('.filter-val').text();
    }

    function addItem(val){
      if(getFilterValue() !== val){
        $head.children('.filter-val').text(val);
        $filter.addClass('filter-has-val');
      }

    }
    function removeItem(){
      $head.children('.filter-val').text('');
      $filter.removeClass('filter-has-val');
    }

    $options.click(function(){
      addItem($(this).text());
      $head.closest('.tab-accordion').addClass('filter-selected');
    });

    $removeButton.on('click',function(e){
      removeItem();
      e.stopPropagation();
    });

  });

});
