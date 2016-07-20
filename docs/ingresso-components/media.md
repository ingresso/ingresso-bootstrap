---
layout: docs
title: Media 
group: ingresso-components
---

Media Component of Ingresso.com. It follows the same structure as Bootstrap media component.

## Example


We must add `ing-model` class.

{% example html %}

<div class="media ing-model">
  <a class="media-left" href="#">
    <svg class="svg-icon ic-cinema" width="30" height="30">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-movie"></use>
    </svg>
  </a>
  <div class="media-body">
    <h1 class="media-heading"><a href="">Truque de Mestre: O Segundo ato</a></h1>
    Em cartaz em <a href="">111 Cinemas</a>
  </div>
</div>

<div class="media ing-model">
  <a class="media-left" href="#">
    <svg class="svg-icon ic-theater" width="30" height="30">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>
    </svg>
  </a>
  <div class="media-body">
    <h1 class="media-heading"><a href="">Teatro</a></h1>
    Em cartaz em <a href="">999 Teatros</a>
  </div>
</div>

<div class="media ing-model">
  <a class="media-left" href="#">
    <svg class="svg-icon ic-events" width="30" height="30">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-ticket"></use>
    </svg>
  </a>
  <div class="media-body">
    <h1 class="media-heading"><a href="">Evento</a></h1>
    Em cartaz em <a href="">999 Eventos</a>
  </div>
</div>

<div class="media ing-model">
  <a class="media-left" href="#">
    <svg class="svg-icon ic-show" width="30" height="30">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-show"></use>
    </svg>
  </a>
  <div class="media-body">
    <h1 class="media-heading"><a href="">Show</a></h1>
    Em cartaz em <a href="">1 Show</a>
  </div>
</div>

<div class="media ing-model">
  <a class="media-left" href="#">
    <svg class="svg-icon ic-circus" width="30" height="30">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-circus"></use>
    </svg>
  </a>
  <div class="media-body">
    <h1 class="media-heading"><a href="">Circo</a></h1>
    Em cartaz em <a href="">111 Circos</a>
  </div>
</div>

{% endexample %}
