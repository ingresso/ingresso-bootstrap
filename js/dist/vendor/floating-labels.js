"use strict";

$("body").on("input propertychange", ".fl-form-group", function (e) {
  $(this).toggleClass("fl-form-group-with-value", !!$(e.target).val());
}).on("focus", ".fl-form-group", function () {
  $(this).addClass("fl-form-group-with-focus");
}).on("blur", ".fl-form-group", function () {
  $(this).removeClass("fl-form-group-with-focus");
});
//# sourceMappingURL=floating-labels.js.map
