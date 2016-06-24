import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): carousel.js
 * @author Arthur Franco
 * --------------------------------------------------------------------------
 */

const CarouselIngresso = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'swiperIngresso'
  const VERSION             = '4.0.0-alpha.2'
  const DATA_KEY            = 'bs.ingresso.swiper'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    
  }

  const DefaultType = {
    interval : '(number|boolean)',
    keyboard : 'boolean',
    slide    : '(boolean|string)',
    pause    : '(string|boolean)',
    wrap     : 'boolean'
  }

  const Direction = {
    NEXT     : 'next',
    PREVIOUS : 'prev'
  }

  const Event = {
    SLIDE          : `slide${EVENT_KEY}`,
    SLID           : `slid${EVENT_KEY}`,
    KEYDOWN        : `keydown${EVENT_KEY}`,
    MOUSEENTER     : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE     : `mouseleave${EVENT_KEY}`,
    LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    CAROUSEL : 'swiper-ingresso',
    ACTIVE   : 'active',
    SLIDE    : 'slide',
    RIGHT    : 'right',
    LEFT     : 'left',
    ITEM     : 'swiper-slide'
  }

  const Selector = {
    ACTIVE      : '.active',
    ACTIVE_ITEM : '.active.swiper-slide',
    ITEM        : '.swiper-slide',
    NEXT_PREV   : '.next, .prev',
    INDICATORS  : '.swiper-indicators',
    DATA_SLIDE  : '[data-slide], [data-slide-to]',
    DATA_RIDE   : '[data-ride="swiper-ingresso"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class SwiperIngresso{


    constructor(element, config) {

      super(element, config);

      this._showThumbnails();
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    // private

    _showThumbnails() {


      $(Selector.DATA_SLIDE, this._indicatorsElement).each(function(i){

        let $indicatorElement = $(this);
        let $slideImage = $(Selector.ITEM).eq(i).children('img');
        
        $indicatorElement.css('background-image','url('+$slideImage.attr('src')+')');

      })
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data      = $(this).data(DATA_KEY)
        let _config = $.extend({}, Default, $(this).data())

        if (typeof config === 'object') {
          $.extend(_config, config)
        }

        let action = typeof config === 'string' ? config : _config.slide

        if (!data) {
          data = new CarouselIngresso(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'number') {
          data.to(config)
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error(`No method named "${action}"`)
          }
          data[action]()
        } else if (_config.interval) {
          data.pause()
          data.cycle()
        }
      })
    }

    static _dataApiClickHandler(event) {
      let selector = Util.getSelectorFromElement(this)

      if (!selector) {
        return
      }

      let target = $(selector)[0]

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return
      }

      let config     = $.extend({}, $(target).data(), $(this).data())
      let slideIndex = this.getAttribute('data-slide-to')

      if (slideIndex) {
        config.interval = false
      }

      CarouselIngresso._jQueryInterface.call($(target), config)

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex)
      }

      event.preventDefault()
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, CarouselIngresso._dataApiClickHandler)

  $(window).on(Event.LOAD_DATA_API, () => {
    $(Selector.DATA_RIDE).each(function () {
      let $carousel = $(this)
      CarouselIngresso._jQueryInterface.call($carousel, $carousel.data())
    })
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = CarouselIngresso._jQueryInterface
  $.fn[NAME].Constructor = CarouselIngresso
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return CarouselIngresso._jQueryInterface
  }

  return CarouselIngresso

})(jQuery)

export default CarouselIngresso
