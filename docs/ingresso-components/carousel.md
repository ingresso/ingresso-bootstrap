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
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="First slide">
      <div class="carousel-caption">
        <h3>Mais forte que o mundo - A história de José Aldo</h3>
        <p>Baseado na história do expoente brasileiro de lutas de Vale-tudo ...</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14040_d.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14199_d.jpg" alt="Fourth slide">
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
  <ol class="carousel-indicators row">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active col-md-2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1" class="col-md-2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2" class="col-md-2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3" class="col-md-2"></li>
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