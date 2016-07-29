---
layout: docs
title: Card
group: ingresso-components
---

Event Card used throughout the site . There are two options , the standard version ( vertical ) and horizontal version. They use the same HTML and just need to follow some rules.

## Examples


The vertical version follows all Bootstrap standards. We must only add the `ing` class with the pre `card` defined class Bootstrap.

{% example html %}

<article class="card ing" itemscope itemtype="http://schema.org/Movie">
  <meta itemprop="dateCreated" content="2016-06-17">
  <meta itemprop="director" content="Jon M. Chu">
  <img class="card-img-top w-100" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt="Card image cap">
  <div class="card-block">
    <h1 class="card-title" itemprop="name">Truque de Mestre: O Segundo ato</h1>
    <p class="card-text" itemprop="description">Após enganar o FBI um ano antes, o grupo de mágicos é forçado a se reunir mais uma vez e realizar uma nova série de golpes elaborados que culminarão na maior ilusão que já fizeram até agora.</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
  <div class="card-footer text-muted text-xs-center">
    <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
      <meta itemprop="ratingValue" content="0">
      <meta itemprop="worstRating" content="0">
      <meta itemprop="bestRating" content="5">
      <svg class="rating r0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
        <defs>
          <mask id="svg-stars-mask-0" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
            <rect x="0" y="0" width="0" height="14" fill="white"/>
          </mask>
          <g id="stars-0">
            <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
            <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
            <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
            <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
            <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
          </g>
        </defs>
        <use xlink:href="#stars-0" fill="#C7C7C7"/>
        <use xlink:href="#stars-0" fill="#F5AA19" mask="url(#svg-stars-mask-0)"/>
      </svg>
      <span class="rating-txt">
        <span class="rating-number" itemprop="reviewCount">18</span> avaliações
      </span>
    </div>
  </div>
</article>

{% endexample %}


The horizontal version follows the same patterns, and adds a class called `horizontal` as you can see in the example below

{% example html %}

<article class="card ing horizontal" itemscope itemtype="http://schema.org/Movie">
  <meta itemprop="dateCreated" content="2016-06-17">
  <meta itemprop="director" content="Jon M. Chu">
  <img class="card-img-top" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt="Card image cap">
  <div class="card-wp">
    <div class="card-block">
      <svg class="svg-icon ic-cinema" width="30" height="30">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-movie"></use>
      </svg>
      <h1 class="card-title d-inline-block" itemprop="name"><a href="">Truque de Mestre: O Segundo ato</a></h1>
      <span class="ch-condition">Em cartaz em <a href="">11 cinemas</a> | Classificação Livre</span>
      <p class="card-text" itemprop="description">Após enganar o FBI um ano antes, o grupo de mágicos é forçado a se reunir mais uma vez e realizar uma nova série de golpes elaborados que culminarão na maior ilusão que já fizeram até agora.</p>

      <span class="director card-text m-b-1"><strong>Diretor:</strong> <span itemprop="director">Jon M. Chu</span></span>
      <span class="cast card-text"><strong>Elenco:</strong> <span itemprop="actors">Ana Carolina Borges, Daniel Matias, Gleisson Moreira, Isabel Mamede, Isabela Baiocchi, Jader Chaves, Marianna Lovi, Paula Siqueira.</span></span>
      <a href="#" class="ch-more-info">Veja mais informações</a>  
    </div>
    <div class="card-footer text-muted">
      <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
        <meta itemprop="ratingValue" content="0">
        <meta itemprop="worstRating" content="0">
        <meta itemprop="bestRating" content="5">
        <svg class="rating r0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
          <defs>
            <mask id="svg-stars-mask-0" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
              <rect x="0" y="0" width="0" height="14" fill="white"/>
            </mask>
            <g id="stars-0">
              <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
              <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
              <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
              <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
              <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
            </g>
          </defs>
          <use xlink:href="#stars-0" fill="#C7C7C7"/>
          <use xlink:href="#stars-0" fill="#F5AA19" mask="url(#svg-stars-mask-0)"/>
        </svg>
        <span class="rating-txt">
          <span class="rating-number" itemprop="reviewCount">18</span> avaliações
        </span>
      </div>
    </div>
  </div>
</article>

{% endexample %}
