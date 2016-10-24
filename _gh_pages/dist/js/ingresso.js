(function(){

	/* TODO - precisa refazer a estrutura desse codigo */
	var components = {


				collapse:{
					'js-md':{
						match:function(){

							//temp
							$('.js-md[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.attr('href')),
								unmatchClasses = ['model']

								$element.removeClass('collapsed');
								$content
								.removeClass('collapse')
								.removeAttr('style');

								if($element.hasClass('model1')){
									$element.data('js-md-unmatch-classes','model1')
									$element.removeClass('model1')
								}

								$element.data('original-href',$element.attr('href'));
								$element.removeAttr('href');


							});

							console.log('match dropdown medium');
						},
						unmatch:function(){

							//temp
							$('.js-md[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.data('original-href'));

								$element.addClass('collapsed');
								$content
								.addClass('collapse');

								if($element.data('js-md-unmatch-classes') == 'model1'){
									$element.addClass('model1')
								}

								$element.attr('href',$element.data('original-href'));


							});

							console.log('unmatch dropdown medium');
						},
						setup:function(){
							//console.log('iniciou dropdown medium');
						}
					},
					'js-lg':{
						match:function(){

							//temp
							$('.js-lg[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.attr('href')),
								unmatchClasses = ['model']

								$element.removeClass('collapsed');
								$content
								.removeClass('collapse')
								.removeAttr('style');

								if($element.hasClass('model1')){
									$element.data('js-lg-unmatch-classes','model1')
									$element.removeClass('model1')
								}

								$element.data('original-href',$element.attr('href'));
								$element.removeAttr('href');


							});

							console.log('match dropdown large');
						},
						unmatch:function(){

							//temp
							$('.js-lg[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.data('original-href'));

								$element.addClass('collapsed');
								$content
								.addClass('collapse');

								if($element.data('js-lg-unmatch-classes') == 'model1'){
									$element.addClass('model1')

								}
								$element.attr('href',$element.data('original-href'));


							});

							console.log('unmatch dropdown large');
						},
						setup:function(){
							//console.log('iniciou dropdown medium');
						}
					},
					'js-sm':{
						match:function(){

							console.log('match dropdown small')
						},
						unmatch:function(){
							console.log('unmatch dropdown small');
						},
						setup:function(){
							//console.log('iniciou dropdown small');
						}
					}
				},
				/*carousel:{
					'js-md':{
						match:function(){
							console.log('match carousel medium');
						},
						unmatch:function(){
							console.log('unmatch carousel medium');
						},
						setup:function(){
							console.log('iniciou carousel medium');
						}
					},
					'js-sm':{
						match:function(){
							console.log('match carousel small');
						},
						unmatch:function(){
							console.log('unmatch carousel small');
						},
						setup:function(){
							console.log('iniciou carousel small');
						}
					}
				}*/
			}
			var medias = {
				small:'(min-width:568px)',
				medium:'(min-width:769px)',
				large:'(min-width:992px)'
			};

			for(var media in medias){

				var this_media_components = [];

				/*
					para cada componente, verifica-se quais batem com a midia atual
					reune-se todos os componentes dessa media para ser executado posteriormente
					no local adequado
				*/
				for (var component in components){

					if(media == 'small'){

						this_media_components.push(components[component]['js-sm']);
					}
					else if(media == 'medium'){

						this_media_components.push(components[component]['js-md']);
					}
					else if(media == 'large'){

						this_media_components.push(components[component]['js-lg']);
					}
				}
				console.log('executando media '+media);
				//para cada media, executa-se equire.register()
				enquire.register(medias[media],this_media_components);

				// reseting
				this_media_components = [];
			};
})();

// swiper
;(function(){
  $('[data-ride="swiper-ingresso"], [data-ride="swiper-ingresso-side"]').each(function () {
    var $elm = $(this);

    var options = {
      carousel:{
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      },
      thumbs:{
        slideToClickedSlide: true,
        slidesPerView: 4,
        spaceBetween: 10,
        touchRatio: 0.2,
        centeredSlides:true
      }
    };


    if ($elm.attr('data-ride') == 'swiper-ingresso-side') {
      options.thumbs = $.extend({}, { direction:'vertical', setWrapperSize:true }, options.thumbs);
    }
    else {
      options.thumbs = $.extend({}, {
        centeredSlides: true,
        breakpoints: {
          // >= 320
          320: {
            slidesPerView: 2,
            spaceBetweenSlides: 5
          },
          // >= 544
          544:{
            slidesPerView: 3,
            spaceBetweenSlides: 5
          },
          // >= 768
          768: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
          }
        }
      }, options.thumbs);
    }
    var galleryTop = new Swiper($('.gallery-top', $elm), options.carousel);
    var galleryThumbs = new Swiper($('.gallery-thumbs', $elm), options.thumbs);

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

  });
  
})();
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

;(function(){
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
})();

;(function(){

    var $body = $('body');
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


    function toggleCloseButton(e){
      if($(e.target).is($('#'+$(this).attr('id')))){
        $('[href="#'+$(this).attr('id')+'"]').not('.hd-local-link').find('.svg-icon').toggleClass('hidden-xs-up');
      }
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
    .on('show.bs.collapse',function(e){
      toggleCloseButton.call(this, e);
      if(!$('body.page-overlay').length && $(window).width() < resolutions.large){
        $('body').addClass('page-overlay');
      }
    })
    .on('hide.bs.collapse',function(e){
      toggleCloseButton.call(this, e);
    })
    .on('hidden.bs.collapse',function(e){
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
    if(typeof $header.attr('data-fixed') !== 'undefined'){
      $body.addClass('has-fixed-header');
      $window.scroll(function(){

        if($window.scrollTop() > $header.outerHeight() && !$('.hd-cont.collapse.in',$header).length){
          if(!$header.hasClass('is-reduced')){
            $header.addClass('is-reduced is-reducing');
          }
        }else if($header.hasClass('is-reduced')){
          $header
          .removeClass('is-reduced')
          .addClass('is-reducing');
        }
      })
      $header.on('transitionend',function(){
        $header.removeClass('is-reducing');
      })
      .addClass('is-fixed');
    }

    // end - fixed header

})();
