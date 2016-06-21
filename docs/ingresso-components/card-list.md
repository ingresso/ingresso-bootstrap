---
layout: docs
title: Card List
group: ingresso-components
---

Responsive list of Ingresso.com

## Example

Create a div `card-list` , within it you will create a wrapper ( use the tag you prefer. In the example is as div ) called `cl-wrapper`. You will use the `cl-item` class to list each item you want to display. Within it , any content you want to be listed.

{% example html %}

<div class="card-list">
  <div class="cl-wrapper">

    <div class="cl-item">
      <article class="card" itemscope itemtype="http://schema.org/Movie">
        <meta itemprop="dateCreated" content="2016-06-17">
        <meta itemprop="director" content="Jon M. Chu">
        <img class="card-img-top w-100" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13758_d.jpg" alt="Card image cap">
        <div class="card-block">
          <h1 class="card-title" itemprop="name">Truque de Mestre: O Segundo ato</h1>
          <p class="card-text" itemprop="description">Após enganar o FBI um ano antes, o grupo de mágicos é forçado a se reunir mais uma vez e realizar uma nova série de golpes elaborados que culminarão na maior ilusão que já fizeram até agora.</p>
          <a href="#" class="btn btn-primary">Comprar Ingresso</a>
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
    </div>

    <div class="cl-item">
      <article class="card" itemscope itemtype="http://schema.org/Movie">
        <meta itemprop="dateCreated" content="2016-06-17">
        <meta itemprop="director" content="Duncan Jones">
        <img class="card-img-top w-100" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14200_d.jpg" alt="Card image cap">
        <div class="card-block">
          <h1 class="card-title" itemprop="name">Warcraft - O primeiro encontro de dois mundos</h1>
          <p class="card-text" itemprop="description">O reino pacífico de Azeroth está à beira de uma guerra enquanto sua civilização enfrenta uma raça temível de invasores: guerreiros Orcs fugindo de sua casa moribunda para colonizar um novo lugar. Enquanto um portal se abre para conectar os dois mundos, um exército enfrenta destruição e o outro enfrenta a extinção. De lados opostos, dois heróis são colocados em um caminho de colisão que irá decidir o destino de suas famílias, seu povo e seu lar. Então, uma saga espetacular de poder e sacrifício começa, onde a guerra tem muitas faces, e todos lutam por algo.</p>
          <a href="#" class="btn btn-primary">Comprar Ingresso</a>
        </div>
        <div class="card-footer text-muted text-xs-center">
          <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
            <meta itemprop="ratingValue" content="1">
            <meta itemprop="worstRating" content="0">
            <meta itemprop="bestRating" content="5">
            <svg class="rating r1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
                <defs>
                  <mask id="svg-stars-mask-1" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
                    <rect x="0" y="0" width="15" height="14" fill="white"/>
                  </mask>
                  <g id="stars-1">
                    <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                  </g>
                </defs>
                <use xlink:href="#stars-1" fill="#C7C7C7"/>
                <use xlink:href="#stars-1" fill="#F5AA19" mask="url(#svg-stars-mask-1)"/>
              </svg>
              <span class="rating-txt">
                <span class="rating-number" itemprop="reviewCount">18</span> avaliações
              </span>
            </div>
        </div>
      </article>
    </div>

    <div class="cl-item">
      <article class="card" itemscope itemtype="http://schema.org/Movie">
        <meta itemprop="dateCreated" content="2016-06-17">
        <meta itemprop="director" content="James Wan">
        <img class="card-img-top w-100" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14204_d.jpg" alt="Card image cap">
        <div class="card-block">
          <h1 class="card-title" itemprop="name">Invocação do mal 2</h1>
          <p class="card-text" itemprop="description">Sete anos após os eventos de Invocação do Mal, Lorraine e Ed Warren desembarcam na Inglaterra para ajudar uma família atormentada por uma manifestação poltergeist na filha.</p>
          <a href="#" class="btn btn-primary">Comprar Ingresso</a>
        </div>
        <div class="card-footer text-muted text-xs-center">
          <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
            <meta itemprop="ratingValue" content="2">
            <meta itemprop="worstRating" content="0">
            <meta itemprop="bestRating" content="5">
            <svg class="rating r2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
                <defs>
                  <mask id="svg-stars-mask-2" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
                    <rect x="0" y="0" width="30" height="14" fill="white"/>
                  </mask>
                  <g id="stars-2">
                    <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                  </g>
                </defs>
                <use xlink:href="#stars-2" fill="#C7C7C7"/>
                <use xlink:href="#stars-2" fill="#F5AA19" mask="url(#svg-stars-mask-2)"/>
              </svg>
            <span class="rating-txt">
              <span class="rating-number" itemprop="reviewCount">18</span> avaliações
            </span>
          </div>
        </div>
      </article>
    </div>

    <div class="cl-item">
      <article class="card" itemscope itemtype="http://schema.org/Movie">
        <meta itemprop="dateCreated" content="2016-06-17">
        <meta itemprop="director" content="James Bobin">
        <img class="card-img-top w-100" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14036_d.jpg" alt="Card image cap">
        <div class="card-block">
          <h1 class="card-title" itemprop="name">Alice Através do Espelho</h1>
          <p class="card-text" itemprop="description">Alice atravessa para o outro lado do espelho e lá encontra um mundo diferente, com muitos conceitos invertidos e acontecimentos imprevisíveis, tendo como tema o jogo de xadrez. Na história, ela descobre um estranho mundo construído como um tabuleiro de xadrez, com peças brancas e vermelhas.</p>
          <a href="#" class="btn btn-primary">Comprar Ingresso</a>
        </div>
        <div class="card-footer text-muted text-xs-center">
          <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
            <meta itemprop="ratingValue" content="3">
            <meta itemprop="worstRating" content="0">
            <meta itemprop="bestRating" content="5">
            <svg class="rating r3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
                <defs>
                  <mask id="svg-stars-mask-3" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
                    <rect x="0" y="0" width="45" height="14" fill="white"/>
                  </mask>
                  <g id="stars-3">
                    <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                  </g>
                </defs>
                <use xlink:href="#stars-3" fill="#C7C7C7"/>
                <use xlink:href="#stars-3" fill="#F5AA19" mask="url(#svg-stars-mask-3)"/>
              </svg>
              <span class="rating-txt">
                <span class="rating-number" itemprop="reviewCount">18</span> avaliações
              </span>
            </div>
        </div>
      </article>
    </div>

    <div class="cl-item">
      <article class="card" itemscope itemtype="http://schema.org/Movie">
        <meta itemprop="dateCreated" content="2016-06-17">
        <meta itemprop="director" content="Bryan Singer">
        <img class="card-img-top w-100" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13918_d.jpg" alt="Card image cap">
        <div class="card-block">
          <h1 class="card-title" itemprop="name">X-Men: Apocalipse</h1>
          <p class="card-text" itemprop="description">Apocalipse se passa uma década depois de Dias de um Futuro Esquecido e é uma próxima etapa na história. Desde o início da civilização, ele era adorado como um deus. Apocalipse, o primeiro e mais poderoso mutante do universo X-Men da Marvel, acumulou os poderes de muitos outros mutantes, tornando-se imortal e invencível. Ao acordar depois de milhares de anos, ele está desiludido com o mundo em que se encontra e recruta uma equipe de mutantes poderosos, incluindo um Magneto desanimado, para purificar a humanidade e criar uma nova ordem mundial, sobre a qual ele reinará. Como o destino da Terra está na balança, Raven, com a ajuda do Professor Xavier deve levar uma equipe de jovens X-Men para parar o seu maior inimigo e salvar a humanidade da destruição completa.</p>
          <a href="#" class="btn btn-primary">Comprar Ingresso</a>
        </div>
        <div class="card-footer text-muted text-xs-center">
          <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
            <meta itemprop="ratingValue" content="4">
            <meta itemprop="worstRating" content="0">
            <meta itemprop="bestRating" content="5">
            <svg class="rating r4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
                <defs>
                  <mask id="svg-stars-mask-4" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
                    <rect x="0" y="0" width="60" height="14" fill="white"/>
                  </mask>
                  <g id="stars-4">
                    <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                  </g>
                </defs>
                <use xlink:href="#stars-4" fill="#C7C7C7"/>
                <use xlink:href="#stars-4" fill="#F5AA19" mask="url(#svg-stars-mask-4)"/>
              </svg>
              <span class="rating-txt">
                <span class="rating-number" itemprop="reviewCount">18</span> avaliações
              </span>
            </div>
        </div>
      </article>
    </div>

    <div class="cl-item">
      <article class="card" itemscope itemtype="http://schema.org/Movie">
        <meta itemprop="dateCreated" content="2016-06-17">
        <meta itemprop="director" content="Anthony Russo, Joe Russo">
        <img class="card-img-top w-100" itemprop="image" src="https://ingresso-a.akamaihd.net/img/cinema/cartaz/13756_d.jpg" alt="Card image cap">
        <div class="card-block">
          <h1 class="card-title" itemprop="name">Capitão América: Guerra Civil</h1>
          <p class="card-text" itemprop="description">Depois dos eventos de Vingadores: Era de Ultron, `Capitão América: Guerra Civil´ da Marvel encontra Steve Rogers liderando o recém formado grupo de Vingadores em seus esforços contínuos para proteger a humanidade. Mas após outro incidente, envolvendo os Vingadores, resultar em danos colaterais, aumenta a pressão política para instalar um sistema de responsabilização, comandado por uma agência do governo para supervisionar e dirigir a equipe. O novo status quo divide os Vingadores, resultando em duas frentes - uma liderada por Steve Rogers e seu desejo de que os Vingadores se mantenham livres para defender a humanidade sem a interferência do governo, e a outra que segue a surpreendente decisão de Tony Stark de apoiar a responsabilização e supervisão do governo.</p>
          <a href="#" class="btn btn-primary">Comprar Ingresso</a>
        </div>
        <div class="card-footer text-muted text-xs-center">
          <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
            <meta itemprop="ratingValue" content="5">
            <meta itemprop="worstRating" content="0">
            <meta itemprop="bestRating" content="5">
            <svg class="rating r5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
                <defs>
                  <mask id="svg-stars-mask-5" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
                    <rect x="0" y="0" width="75" height="14" fill="white"/>
                  </mask>
                  <g id="stars-5">
                    <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                    <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
                  </g>
                </defs>
                <use xlink:href="#stars-5" fill="#C7C7C7"/>
                <use xlink:href="#stars-5" fill="#F5AA19" mask="url(#svg-stars-mask-5)"/>
              </svg>
              <span class="rating-txt">
                <span class="rating-number" itemprop="reviewCount">18</span> avaliações
              </span>
            </div>
        </div>
      </article>
    </div>
  </div>
</div>
{% endexample %}
