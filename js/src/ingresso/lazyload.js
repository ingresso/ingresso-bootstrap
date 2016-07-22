/* global Tether */

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): lazyload.js
 * @author Arthur Franco
 * --------------------------------------------------------------------------
 */

 const LazyloadIngresso = (($) => {

  /**
   * Check for Lazyload dependency
   * Lazy Load Plugin for jQuery - https://github.com/tuupola/jquery_lazyload
   */
   if (window.Tether === undefined) {
    throw new Error('Bootstrap lazyload require Lazy Load Plugin for jQuery (https://github.com/tuupola/jquery_lazyload)')
  }


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

   const NAME                = 'lazyloadIngresso'
   const VERSION             = '4.0.0-alpha.2'
   const DATA_KEY            = 'bs.lazyloadingresso'
   const DATA_API_KEY        = '.data-api'
   const EVENT_KEY           = `.${DATA_KEY}`
   const JQUERY_NO_CONFLICT  = $.fn[NAME]
   const TRANSITION_DURATION = 300

   const Default = {
    animation   : true,
    trigger     : 'scroll',
    container: window,
    effect : "fadeIn",
    offset : 300,
    skip_invisible: true,
    load: null,
    placeholder:'/assets/img/spinner.gif'
  }

  const DefaultType = {
    animation       : 'boolean',
    trigger         : 'string',
    container       : 'window|element',
    effect          : 'string',
    offset          : 'number',
    skip_invisible  : 'boolean',
    load            : 'null|function',
    placeholder     : 'string'
  }

  const Event = {
    SCROLL          : `scroll${EVENT_KEY}${DATA_API_KEY}`,
    LOAD_DATA_API   : `load${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    LOADED : 'lazy-loaded',
    INITIATED : 'lazy-load'
  }

  const Selector = {
    IMG       : 'img',
    DATA_LAZY : '[data-lazyload]'
  }

  const Trigger = {
    HOVER  : 'hover',
    FOCUS  : 'focus',
    CLICK  : 'click',
    MANUAL : 'manual'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

   class LazyloadIngresso {

    constructor(element, config) {

      // private
      this._isEnabled      = true
      this._timeout        = 0
      this.classesOnLoad = false

      // protected
      this.element = element
      this.container = window
      this.config  = this._getConfig(config)
      this.tip     = null

      this._init()

    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME$(Selector.IMG, $el)
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // public

    enable() {
      this._isEnabled = true
    }

    disable() {
      this._isEnabled = false
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }

    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _init() {

        let $el = $(this.element);

        // if havent been loaded yet
        if(this.classesOnLoad){
          if($el.hasClass(ClassName.INITIATED)){
            return
          }
          this._addClasses();
        }

        if(this._isImage()) {

             // verify if the last image lazyloaded has container
             if(!$el.closest(Default.container).length && Default.container !== window){

               Default.container = window;
             }

             this._applyLazyload();

           }else{

          // if not image
          if(this._isBootstrapTabs()){

            // set current element to be the tab element
            $el = this.element = $tab.get(0)

          }

          // set container for recursive use of this function
          Default.container = $el;
          this._applyLazyload($(Selector.IMG, $el))

        }
      
      return;

    }

    _applyLazyload(el) {

      if(typeof this._onloadCallback == 'function'){
        Default.load = this._onloadCallback
      }

      $(el || this.element).lazyload(Default)

    }

    _isImage(){

      if(this.element.nodeType == Node.ELEMENT_NODE) {

        if(this.element.tagName == 'IMG'){
          return true
        }

        return false
      }
    }

    // Use for Bootstrap Tabs
    _isBootstrapTabs() {

      if($(this.element).attr('href')){

        let $el = $(this.element)
        // set referenced tab
        let $tab = $($el.attr('href'))

        if($el.attr('data-lazyload') && $el.attr('data-toggle') == 'tab'){


          $el.on('shown.bs.tab',function(){

            // fire scroll on tab to force images to show
            $(Selector.IMG, $tab).trigger(Event.SCROLL)

            return true

          })
        }
      }
    }

    _onloadCallback(){

      if(this.classesOnLoad) $(this).toggleClass('lazy-load lazy-loaded')
    }

    _addClasses(){
      $(this.element).addClass(ClassName.INITIATED);
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        console.log('jq interface')
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ?
        config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new LazyloadIngresso(this, _config)
          $(this).data(DATA_KEY, data)
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

   $(window).on(Event.LOAD_DATA_API, () => {
     $(Selector.DATA_LAZY).each(function () {
       let $lazy = $(this)
       LazyloadIngresso._jQueryInterface.call($lazy, $lazy.data())
     })
   })



  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

   $.fn[NAME]             = LazyloadIngresso._jQueryInterface
   $.fn[NAME].Constructor = LazyloadIngresso
   $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return LazyloadIngresso._jQueryInterface
  }

  return LazyloadIngresso

})(jQuery)

export default LazyloadIngresso
