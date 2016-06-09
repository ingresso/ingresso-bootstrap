(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.floatingLabels = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  $("body").on("input propertychange", ".fl-form-group", function (e) {
    $(this).toggleClass("fl-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".fl-form-group", function () {
    $(this).addClass("fl-form-group-with-focus");
  }).on("blur", ".fl-form-group", function () {
    $(this).removeClass("fl-form-group-with-focus");
  });
});
