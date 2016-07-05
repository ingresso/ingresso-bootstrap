---
layout: docs
title: Highlighted Titles 
group: ingresso-components
---

Highlighted Titles to the website of Ingresso.com

## Example

We use the class `high- title` and add a class according to the desired event . They can also be used without the icon ( svg ) and the link ( view all ). 

{% example html %}

<h1 class="high-title ht-cinema">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-movie"></use>
  </svg>
  Cinema 
  <a class="ht-lk" href="">ver todos</a>
</h1>

<h1 class="high-title ht-theater">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>
  </svg>
  Teatro
  <a class="ht-lk" href="">ver todos</a>
</h1>

<h1 class="high-title ht-show">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-show"></use>
  </svg>
  Show
  <a class="ht-lk" href="">ver todos</a>
</h1>

<h1 class="high-title ht-events">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-ticket"></use>
  </svg>
  Eventos
  <a class="ht-lk" href="">ver todos</a>
</h1>

<h1 class="high-title ht-circus">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-circus"></use>
  </svg>
  Circo
  <a class="ht-lk" href="">ver todos</a>
</h1>

<h1 class="high-title ht-promo">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-promo"></use>
  </svg>
  Promoção 
  <a class="ht-lk" href="">ver todos</a>
</h1>

{% endexample %}
