---
layout: docs
title: Highlighted Titles 
group: ingresso-components
---

Highlighted Titles to the website of Ingresso.com

## Example

We use the class `high-title` and add a class according to the desired event . They can also be used without the icon ( svg ) and the link ( view all ). 

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

## Example

We use the class `high-title2`. They can also be used without the icon. 

{% example html %}

<h1 class="high-title2">
  <svg class="svg-icon d-inline-block" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-star-full"></use>
  </svg>
  <a href="">Cine 10 Carrefour Sulacap</a>
  <a class="ht-lk etmt-see-map" href="">
      <span class="hidden-sm-down">ver no mapa</span>
      <svg class="svg-icon" width="30" height="30">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-city"></use>
      </svg>
  </a>
</h1>


{% endexample %}

## Example
Title with colors related to the events of Ingresso.com . Just follow the example and use the corresponding classes.

{% example html %}

<h1 class="event-name">Nome do produto Padrão</h1>
<h1 class="event-name clr-cinema">Nome do produto Cinema</h1>
<h1 class="event-name clr-theater">Nome do produto Teatro</h1>
<h1 class="event-name clr-show">Nome do produto Show</h1>
<h1 class="event-name clr-events">Nome do produto Evento</h1>
<h1 class="event-name clr-circus">Nome do produto Circo</h1>
<h1 class="event-name clr-promo">Nome do produto Promoção</h1>

{% endexample %}

## Example
Título padrão com borda e ícone.

{% example html %}

<h1 class="main-title">
  <svg class="svg-icon" width="30" height="30">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-lock"></use>
  </svg>
  Recuperação de senha
</h1>

{% endexample %}
