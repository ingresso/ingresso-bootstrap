---
layout: docs
title: Carousel
group: components
---



## Example

Variant of Bootstrap's Carousel.
The only difference between Bootstrap's one and Ingresso's is the class <span class="highlighter-rouge">.carousel-ingresso</span>

{% example html %}
<div id="carousel-example-generic" class="carousel slide carousel-ingresso" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active" style="background-image:url(http://localhost:9001/assets/img/europe-wallpaper-30.jpg);background-size:contain;"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img src="http://localhost:9001/assets/img/europe-wallpaper-30.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img data-src="holder.js/900x388/auto/#666:#444/text:Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img data-src="holder.js/900x388/auto/#555:#333/text:Third slide" alt="Third slide">
    </div>
  </div>
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="icon-prev" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="icon-next" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endexample %}
