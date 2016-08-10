---
layout: docs
title: Alerts
group: ingresso-components
---

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts jQuery plugin](#dismissing).

{% example html %}
<div class="alert alert-success" role="alert">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-check"></use>
  </svg>
  <p><strong>Well done!</strong> You successfully read this important alert message.</p>
</div>
<div class="alert alert-info" role="alert">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-tips"></use>
  </svg>
  <p><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</p>
</div>
<div class="alert alert-warning" role="alert">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-icon-alert"></use>
  </svg>
  <p><strong>Warning!</strong> Better check yourself, you're not looking too good.</p>
</div>
<div class="alert alert-danger" role="alert">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-icon-error"></use>
  </svg>
  <p><strong>Oh snap!</strong> Change a few things up and try submitting again.</p>
</div>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
