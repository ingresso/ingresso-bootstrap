/* temp js to show filter beahavior */
;(function(){
  /* temp code - for behavior purpose */
  $('.filter').each(function(){
    var $filter = $(this);
    var $head = $('[data-toggle="collapse"]',this);
    var $options = $('[role=option]',this);
    var $removeButton = $('.filter-action',this);

    function _constructor(){
      $('a',$options).click(function(){
        _addItem.call(this,$(this).attr('data-val') || $(this).text());
        $head.closest('.tab-accordion').addClass('filter-selected');
      });

      $removeButton.on('click',function(e){
        _removeItem.call(this);
        e.stopPropagation();
      });
    }

    function _getFilterValue(){
      return $head.children('.filter-val').text();
    }

    function _addItem(val){
      if(_getFilterValue() !== val){
        $head.children('.filter-val').text(val);
        $options.filter('.is-selected').removeClass('is-selected');
        $filter.addClass('filter-has-val');

        $(this).closest('.filter-it')
        .addClass('is-selected')
        .trigger('filter.added');
      }

    }

    function _removeItem(){
      $head.children('.filter-val').text('');
      $options.filter('.is-selected').removeClass('is-selected');
      $filter.removeClass('filter-has-val');
    }

    _constructor.call(this);

  });

})();
