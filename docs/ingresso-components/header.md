---
layout: docs
title: Header
group: ingresso-components
---

A lightweight, flexible Header that can be used on your site.

## Example

{% example html %}
    
    <header id="header" class="header">

      <div class="hd-top row">
        <div class="col-xs-6">
          <h1 class="logo">
            <a href="#">
              <svg class="svg-icon" width="127" height="50">
                <use xlink:href="#icon-logo" />
              </svg>
            </a>
          </h1>
        </div>
        <div class="col-xs-6 text-xs-right">
          <div class="hd-user-menu">
            <a href="">
              <span class="umenu-text">Olá, Visitante</span>
              <span class="ic-rounded ic-rd-ingresso ic-rd-size2">
                <svg class="svg-icon" width="30" height="30">
                  <use xlink:href="#icon-profile" />
                </svg>
              </span>
            </a>
            <div class="hd-umenu-cont">

            </div>
          </div>
          <div class="hd-search">
            <a href="">
              <span class="ic-rounded ic-rd-ingresso ic-rd-size2">
                <svg class="svg-icon" width="30" height="30">
                  <use xlink:href="#icon-search" />
                </svg>
              </span>
            </a>
            <div class="hd-search-cont">
              <div class="form-group fl-form-group form-group-btn">
                <label class="fl-label" for="exampleCEP1">Buscar</label>
                <input type="combo" class="form-control" id="exampleCEP1" aria-describedby="cepHelp" placeholder="Busque filmes, teatros, shows...">
                <button type="button" class="btn btn-primary">
                  <svg class="svg-icon ic-white" width="25" height="25">
                    <use xlink:href="#icon-search" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hd-botton row">
        <div class="col-xs-12 col-md-3">
          <div class="hd-local">
            <a href="">
              <svg class="svg-icon ic-white valign-middle" width="30" height="30">
                <use xlink:href="#icon-city" />
              </svg>
              São josé do vale do Rio Preto
              <svg class="svg-icon ic-white valign-middle" width="30" height="30">
                <use xlink:href="#icon-arrow-down-2" />
              </svg>
            </a>
            <div class="hd-local-cont">

            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-9">
          <nav class="hd-main-menu">
            <ul>
              <li class="hd-mm-cinema active"><a href="#">Cinema</a></li>
              <li class="hd-mm-theater"><a href="#">Teatro</a></li>
              <li class="hd-mm-show"><a href="#">Show</a></li>
              <li class="hd-mm-event"><a href="#">Evento</a></li>
              <li class="hd-mm-circus"><a href="#">Circo</a></li>
              <li class="hd-mm-promo"><a href="#">Promoção</a></li>
            </ul>
          </nav>
        </div>
      </div>
</header>

{% endexample %}
