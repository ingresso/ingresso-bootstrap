/* global Tether */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): lazyload.js
 * @author Arthur Franco
 * --------------------------------------------------------------------------
 */

var LazyloadIngresso = (function ($) {

  /**
   * Check for Lazyload dependency
   * Lazy Load Plugin for jQuery - https://github.com/tuupola/jquery_lazyload
   */
  if (window.Tether === undefined) {
    throw new Error('Bootstrap lazyload require Lazy Load Plugin for jQuery (https://github.com/tuupola/jquery_lazyload)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'lazyloadIngresso';
  var VERSION = '4.0.0-alpha.2';
  var DATA_KEY = 'bs.lazyloadingresso';
  var DATA_API_KEY = '.data-api';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;

  var Default = {
    animation: true,
    trigger: 'scroll',
    container: window,
    effect: "fadeIn",
    offset: 300,
    skip_invisible: true,
    load: null,
    placeholder: '/assets/img/spinner.gif'
  };

  var DefaultType = {
    animation: 'boolean',
    trigger: 'string',
    container: 'window|element',
    effect: 'string',
    offset: 'number',
    skip_invisible: 'boolean',
    load: 'null|function',
    placeholder: 'string'
  };

  var Event = {
    SCROLL: 'scroll' + EVENT_KEY + DATA_API_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    LOADED: 'lazy-loaded',
    INITIATED: 'lazy-load'
  };

  var Selector = {
    IMG: 'img',
    DATA_LAZY: '[data-lazyload]'
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var LazyloadIngresso = (function () {
    function LazyloadIngresso(element, config) {
      _classCallCheck(this, LazyloadIngresso);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this.classesOnLoad = false;

      // protected
      this.element = element;
      this.container = window;
      this.config = this._getConfig(config);
      this.tip = null;

      this._init();
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(LazyloadIngresso, [{
      key: 'enable',

      // public

      value: function enable() {
        this._isEnabled = true;
      }
    }, {
      key: 'disable',
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: 'toggleEnabled',
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_init',
      value: function _init() {

        var $el = $(this.element);

        // if havent been loaded yet
        if (this.classesOnLoad) {
          if ($el.hasClass(ClassName.INITIATED)) {
            return;
          }
          this._addClasses();
        }

        if (this._isImage()) {

          // verify if the last image lazyloaded has container
          if (!$el.closest(Default.container).length && Default.container !== window) {

            Default.container = window;
          }

          this._applyLazyload();
        } else {

          // if not image
          if (this._isBootstrapTabs()) {

            // set current element to be the tab element
            $el = this.element = $tab.get(0);
          }

          // set container for recursive use of this function
          Default.container = $el;
          this._applyLazyload($(Selector.IMG, $el));
        }

        return;
      }
    }, {
      key: '_applyLazyload',
      value: function _applyLazyload(el) {

        if (typeof this._onloadCallback == 'function') {
          Default.load = this._onloadCallback;
        }

        $(el || this.element).lazyload(Default);
      }
    }, {
      key: '_isImage',
      value: function _isImage() {

        if (this.element.nodeType == Node.ELEMENT_NODE) {

          if (this.element.tagName == 'IMG') {
            return true;
          }

          return false;
        }
      }

      // Use for Bootstrap Tabs
    }, {
      key: '_isBootstrapTabs',
      value: function _isBootstrapTabs() {
        var _this = this;

        if ($(this.element).attr('href')) {
          (function () {

            var $el = $(_this.element);
            // set referenced tab
            var $tab = $($el.attr('href'));

            if ($el.attr('data-lazyload') && $el.attr('data-toggle') == 'tab') {

              $el.on('shown.bs.tab', function () {

                // fire scroll on tab to force images to show
                $(Selector.IMG, $tab).trigger(Event.SCROLL);

                return true;
              });
            }
          })();
        }
      }
    }, {
      key: '_onloadCallback',
      value: function _onloadCallback() {

        if (this.classesOnLoad) $(this).toggleClass('lazy-load lazy-loaded');
      }
    }, {
      key: '_addClasses',
      value: function _addClasses() {
        $(this.element).addClass(ClassName.INITIATED);
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          console.log('jq interface');
          var data = $(this).data(DATA_KEY);
          var _config = typeof config === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new LazyloadIngresso(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
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
    }, {
      key: 'NAME',
      get: function get() {
        return NAME$(Selector.IMG, $el);
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return LazyloadIngresso;
  })();

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_LAZY).each(function () {
      var $lazy = $(this);
      LazyloadIngresso._jQueryInterface.call($lazy, $lazy.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = LazyloadIngresso._jQueryInterface;
  $.fn[NAME].Constructor = LazyloadIngresso;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return LazyloadIngresso._jQueryInterface;
  };

  return LazyloadIngresso;
})(jQuery);
//# sourceMappingURL=lazyload.js.map
