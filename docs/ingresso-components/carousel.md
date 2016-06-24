---
layout: docs
title: Carousel
group: components
---



## Example

Variant of Bootstrap's Carousel.
The only difference between Bootstrap's one and Ingresso's is the class <code class="highlighter-rouge">.carousel-ingresso</code>

{% example html %}
<div id="carousel-example-generic" class="carousel slide carousel-ingresso" data-ride="carousel-ingresso">
  <div class="carousel-content">
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <svg class="svg-icon icon-prev" width="30" height="30">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow2-2"></use>
      </svg>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <svg class="svg-icon icon-next" width="30" height="30" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow2"></use>
      </svg>
      <span class="sr-only">Next</span>
    </a>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="First slide">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14040_d.jpg" alt="Second slide">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt="Third slide">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14199_d.jpg" alt="Fourth slide">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
    </div>
  </div>
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active carousel-indicator"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1" class="carousel-indicator"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2" class="carousel-indicator"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3" class="carousel-indicator"></li>
  </ol>
</div>
{% endexample %}

### Via data attributes

Use data attributes to easily control the position of the carousel. `data-slide` accepts the keywords `prev` or `next`, which alters the slide position relative to its current position. Alternatively, use `data-slide-to` to pass a raw slide index to the carousel `data-slide-to="2"`, which shifts the slide position to a particular index beginning with `0`.

The `data-ride="carousel-ingresso"` attribute is used to mark a carousel as animating starting at page load. **It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.**

### Via JavaScript

Call carousel manually with:

{% highlight js %}
$('.carousel').ingressoCarousel()
{% endhighlight %}

### Swiper

Another Carousel used by Ingresso.com is Swiper. See more info on <a href="http://idangero.us/swiper/">Swiper</a>.

{% example html %}
<!-- Swiper -->
<div class="swiper-ingresso" data-ride="swiper-ingresso">
  <div class="swiper-container gallery-top">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14040_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14199_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
    </div>
    <!-- Add Arrows -->
    <a class="swiper-button-next hidden-md-down" role="button">
      <svg class="svg-icon icon-next" width="45" height="45" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow2"></use>
      </svg>
      <span class="sr-only">Next</span>
    </a>
    <a class="swiper-button-prev hidden-md-down" role="button">
      <svg class="svg-icon icon-prev" width="45" height="45" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow2-2"></use>
      </svg>
      <span class="sr-only">Previous</span>
    </a>
  </div>
  <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide-active"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14040_d.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14199_d.jpg" alt=""></div>
    </div>
  </div>
</div>
{% endexample %}

### Vertical

{% example html %}
<!-- Swiper -->
<div class="swiper-ingresso swiper-ingresso-side" data-ride="swiper-ingresso-side">
  <div class="swiper-container gallery-top">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14040_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14199_d.jpg" alt="">
        <div class="carousel-caption">
          <h3>Mais forte que o mundo - A história de José Aldo</h3>
          <p class="hidden-xs-down">Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
        </div>
      </div>
    </div>
    <!-- Add Arrows -->
    <a class="swiper-button-next hidden-md-down" role="button">
      <svg class="svg-icon icon-next" width="45" height="45" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow2"></use>
      </svg>
      <span class="sr-only">Next</span>
    </a>
    <a class="swiper-button-prev hidden-md-down" role="button">
      <svg class="svg-icon icon-prev" width="45" height="45" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow2-2"></use>
      </svg>
      <span class="sr-only">Previous</span>
    </a>
  </div>
  <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14040_d.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14199_d.jpg" alt=""></div>
    </div>
  </div>
</div>
{% endexample %}