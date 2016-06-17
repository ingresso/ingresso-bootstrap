(function(){
	
	/* TODO - precisa refazer a estrutura desse codigo */
	var components = {


				collapse:{
					'js-md':{
						match:function(){

							//temp
							$('.js-md[data-toggle="collapse"]').each(function(){

								var $element = $(this);

								$($element.attr('href')).removeClass('collapse').removeAttr('style');
								$element.data('original-href',$element.attr('href'));
								$element.removeAttr('href');


							});

							console.log('match dropdown medium');
						},
						unmatch:function(){

							//temp
							$('.js-md[data-toggle="collapse"]').each(function(){

								var $element = $(this);

								$($element.data('original-href')).addClass('collapse');
								$element.attr('href',$element.data('original-href'));
								

							});

							console.log('unmatch dropdown medium');
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
				medium:'(min-width:769px)'
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
				}

				//para cada media, executa-se equire.register()
				enquire.register(medias[media], 

					$.extend({},{

						match:function(){
							

							//para cada uma das funcoes de cada componente, executa-se essa funcao
							for(var i=0, media_components_len = this_media_components.length;
								i < media_components_len;i++
								){

								if(this_media_components[i].match){	

									this_media_components[i].match.apply(undefined);
								}
							}
						},
						unmatch:function(){
							
							for(var i=0, media_components_len = this_media_components.length;
								i < media_components_len;i++
								){

								if(this_media_components[i].unmatch){

									this_media_components[i].unmatch.apply(undefined);
								}
							}
						},
						setup:function(){
							
							for(var i=0, media_components_len = this_media_components.length;
								i < media_components_len;i++
								){

								if(this_media_components[i].setup){

									this_media_components[i].setup.apply(undefined);
								}

							}
						}
					},
					{	
					    // OPTIONAL, defaults to false
					    // If set to true, defers execution of the setup function 
					    // until the first time the media query is matched
					    deferSetup : true
					})
				);
			};
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var CarouselIngresso = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel-ingresso';
  var VERSION = '4.0.0-alpha.2';
  var DATA_KEY = 'bs.carousel-ingresso';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREVIOUS: 'prev'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel-ingresso',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'right',
    LEFT: 'left',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.next, .prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel-ingresso"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var CarouselIngresso = (function (_Carousel) {
    _inherits(CarouselIngresso, _Carousel);

    function CarouselIngresso(element, config) {
      _classCallCheck(this, CarouselIngresso);

      _get(Object.getPrototypeOf(CarouselIngresso.prototype), 'constructor', this).call(this, element, config);

      this._showThumbnails();
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(CarouselIngresso, [{
      key: '_showThumbnails',

      // private

      value: function _showThumbnails() {

        $(Selector.DATA_SLIDE, this._indicatorsElement).each(function () {
          console.log(this);
        });
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Default, $(this).data());

          if (typeof config === 'object') {
            $.extend(_config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new CarouselIngresso(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (data[action] === undefined) {
              throw new Error('No method named "' + action + '"');
            }
            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      }
    }, {
      key: '_dataApiClickHandler',
      value: function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $(selector)[0];

        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }

        var config = $.extend({}, $(target).data(), $(this).data());
        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($(target), config);

        if (slideIndex) {
          $(target).data(DATA_KEY).to(slideIndex);
        }

        event.preventDefault();
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return CarouselIngresso;
  })(Carousel);

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, CarouselIngresso._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      CarouselIngresso._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = CarouselIngresso._jQueryInterface;
  $.fn[NAME].Constructor = CarouselIngresso;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return CarouselIngresso._jQueryInterface;
  };

  return Carousel;
})(jQuery);
//# sourceMappingURL=carousel.js.map
