---
layout: docs
title: Header
group: ingresso-components
---

A lightweight, flexible Header that can be used on your site.

## Example

{% example html %}
    <header id="header" class="container-fluid">
      <div class="navbar-brand">
        <h1><a class="hdr-logo" href="">Ingresso.com</a></h1>
      </div>
      <div class="navbar-buttons pull-xs-right">
        <button type="button" class="navbar-toggle hidden-sm-up" data-toggle="collapse" data-target="#search">
                <span class="sr-only">Toggle search</span>
                <svg class="svg-icon" width="30" height="30">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
                </svg>
          </button>
          <button type="button" class="navbar-toggle collapsed hidden-sm-up" data-toggle="collapse" data-target="#navigation">
              <span class="sr-only">Toggle navigation</span>
              <svg class="svg-icon" width="30" height="30">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-menu"></use>
              </svg>
          </button>
      </div>

      <div class="search clearfix collapse" id="search" style="height: 1px;">
          <form class="navbar-form" role="search">
              <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search">
                  <span class="input-group-btn">
                    <button type="submit" class="btn btn-primary">
                      <svg class="svg-icon" width="30" height="30">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
                      </svg>
                    </button>
                  </span>
              </div>
          </form>
      </div>

      <div class="main-menu navbar-collapse collapse" id="navigation">

        <div class="hdr-sub-menu">
          <div class="hdr-user-menu">
            <strong class="user-msg">Olá, <span class="user-name">Fulano</span>!</strong>
            <button type="button" class="navbar-toggle hidden-xs-down" data-toggle="collapse" data-target="#hdr-user-lt">
                <span class="sr-only">Toggle User Menu</span>
                <svg class="svg-icon" width="30" height="30">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-user2"></use>
                </svg>
            </button>
            <ul class="hdr-user-lt collapse" id="hdr-user-lt">
              <li class="hdr-user-it"><a class="hdr-user-lk" href="">Meus Pedidos</a></li>
              <li class="hdr-user-it"><a class="hdr-user-lk" href="">Minha Conta</a></li>
              <li class="hdr-user-it"><a class="hdr-user-lk" href="">Sair da conta</a></li>
            </ul>
          </div>

          <div class="hdr-location-menu">
            <button type="button" class="navbar-toggle hidden-xs-down" data-toggle="collapse" data-target="#hdr-lct-cont">
                <span class="sr-only">Toggle Location Menu</span>
                <svg class="svg-icon" width="30" height="30">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-place"></use>
                </svg>
            </button>
            <div class="hdr-lct-cont collapse" id="hdr-lct-cont">
              locais
              locais
            </div>
          </div>
        </div>

        <nav>
          <ul class="nav nav-justified">
            <li class="nav-item"><a class="nav-link active" href="#">Cinema</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Teatro</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Show</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Evento</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Circo</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Promoção</a></li>
          </ul>
        </nav>

        <div class="hdr-support">
          <button type="button" class="navbar-toggle hidden-xs-down" data-toggle="collapse" data-target="#hdr-spprt-cont">
              <span class="sr-only">Toggle Support Menu</span>
              <svg class="svg-icon" width="30" height="30">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-faq2"></use>
              </svg>
          </button>
          <div class="hdr-spprt-cont collapse" id="hdr-spprt-cont">
            <strong>Atendimento</strong>
            <p>Lorem Ipsum, lalalala, lilili lololo e lululu.</p>
          </div>
        </div>
      </div>

    </header>
{% endexample %}
