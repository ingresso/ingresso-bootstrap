import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const SlidePage = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'slide-page'
  const VERSION             = '4.0.0-alpha.2'
  const DATA_KEY            = 'bs.slide-page'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Event = {
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_MENU : 'slide-page',
    ACTIVE        : 'active',
    FADE          : 'fade',
    IN            : 'in'
  }

  const Selector = {
    SLIDE_PAGE                     : '[data-slide-page]',
    SLIDE_PAGE_WP                    : '[data-slide-page-wp]',


  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class SlidePage {

    constructor(element) {
      this._element = element
    }

    // getters
    static get VERSION() {
      return VERSION
    }

    // public

    dispose() {
      $.removeClass(this._element, DATA_KEY)
      this._element = null
    }


    // private

    _activate(element, container, callback) {
      let active          = $(container).find(Selector.ACTIVE_CHILD)[0]
      let isTransitioning = callback
        && Util.supportsTransitionEnd()
        && ((active && $(active).hasClass(ClassName.FADE))
           || Boolean($(container).find(Selector.FADE_CHILD)[0]))

      let complete = $.proxy(
        this._transitionComplete,
        this,
        element,
        active,
        isTransitioning,
        callback
      )

      if (active && isTransitioning) {
        $(active)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        complete()
      }

      if (active) {
        $(active).removeClass(ClassName.IN)
      }
    }

    _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE)

        let dropdownChild = $(active).find(
          Selector.DROPDOWN_ACTIVE_CHILD
        )[0]

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE)
        }

        active.setAttribute('aria-expanded', false)
      }

      $(element).addClass(ClassName.ACTIVE)
      element.setAttribute('aria-expanded', true)

      if (isTransitioning) {
        Util.reflow(element)
        $(element).addClass(ClassName.IN)
      } else {
        $(element).removeClass(ClassName.FADE)
      }

      if (element.parentNode &&
         ($(element.parentNode).hasClass(ClassName.DROPDOWN_MENU))) {

        let dropdownElement = $(element).closest(Selector.DROPDOWN)[0]
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        }

        element.setAttribute('aria-expanded', true)
      }

      if (callback) {
        callback()
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this = $(this)
        let data  = $this.data(DATA_KEY)

        if (!data) {
          data = new SlidePage(this)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $.ready(function(){
    $(Selector.DATA_TOGGLE).each(function(){
      SlidePage._jQueryInterface.call($(this))
    })
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = SlidePage._jQueryInterface
  $.fn[NAME].Constructor = SlidePage
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return SlidePage._jQueryInterface
  }

  return SlidePage

})(jQuery)

export default SlidePage
