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
        <div class="col-xs-4">
            <h1 class="logo">
            <a href="#">
              <svg class="svg-icon" width="127" height="50">
                <use xlink:href="#icon-logo" />
              </svg>
            </a>
          </h1>
        </div>
        <div class="col-xs-8 text-xs-right">
            <div class="hd-user-menu">
                <a class="hd-um-link hd-link" data-toggle="collapse" href="#hd-umenu-cont">
                    <span class="umenu-text">Olá, Visitante</span>
                    <span class="ic-rounded ic-rd-ingresso ic-rd-size2">
                <svg class="svg-icon" width="30" height="30">
                  <use xlink:href="#icon-profile" />
                </svg>
              </span>
                </a>
                <div class="hd-umenu-cont hd-cont collapse" id="hd-umenu-cont">
                    <div class="hd-cont-wp row">
                        <div class="umenu-tips hidden-sm-down col-md-9">
                            <ul class="row">
                                <li class="col-xs-4">
                                    <svg class="svg-icon" width="97" height="112">
                                        <use xlink:href="#icon-alert-ingresso" />
                                    </svg>
                                    <p>Compre ingressos sem filas, com conforto e comodidade</p>
                                </li>
                                <li class="col-xs-4">
                                    <svg class="svg-icon" width="97" height="112">
                                        <use xlink:href="#icon-alert-ingresso" />
                                    </svg>
                                    <p>Compre combos de pipoca e outros produtos antecipadamente</p>
                                </li>
                                <li class="col-xs-4">
                                    <svg class="svg-icon" width="97" height="112">
                                        <use xlink:href="#icon-alert-assento" />
                                    </svg>
                                    <p>Escolha os seus lugares e como deseja retirar seus ingressos</p>
                                </li>
                            </ul>
                        </div>
                        <div class="hd-umenu-options col-xs-12 col-md-3">
                            <ul>
                                <li>
                                    <a class="tab-accordion model1 hidden-md-up" role="button" data-toggle="collapse" data-parent="#tab" href="#tab-main-content01" aria-expanded="true" aria-controls="tab-main-content01">Olá, Lemon</a>
                                    <div id="tab-main-content01" class="tab-content collapse in">
                                        <div class="tab-cont-wp">
                                            <ul>
                                                <li><a href="">Faça Login</a></li>
                                                <li><a href="">Cadastre-se</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hd-support">
                <a class="hd-support-link hd-link" href="">
                    <span class="ic-rounded ic-rd-ingresso ic-rd-size2">
                <svg class="svg-icon" width="30" height="30">
                  <use xlink:href="#icon-help-1" />
                </svg>
              </span>
                </a>
            </div>
            <div class="hd-search">
                <a class="hd-search-link" data-toggle="collapse" href="#hd-search-cont">
                    <span class="ic-rounded ic-rd-ingresso ic-rd-size2">
                <svg class="svg-icon" width="20" height="20">
                  <use xlink:href="#icon-search" />
                </svg>
              </span>
                </a>
                <div class="hd-search-cont hd-cont collapse" id="hd-search-cont">
                    <div class="hd-cont-wp">
                        <div class="hd-search-input">
                            <div class="form-group fl-form-group form-group-btn">
                                <label class="fl-label" for="exampleCEP1">Buscar</label>
                                <input type="combo" class="form-control" id="search-ipt" placeholder="Busque filmes, teatros, shows...">
                                <button type="button" class="btn btn-primary">
                                    <svg class="svg-icon ic-white" width="20" height="20">
                                        <use xlink:href="#icon-search" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="hd-search-suggestions">
                            <ul class="row">
                                <li class="col-xs-12 col-md-6 col-lg-12"><a href="">Batman vs. Superman</a></li>
                                <li class="col-xs-12 col-md-6 col-lg-12"><a href="">A bruxa</a></li>
                                <li class="col-xs-12 col-md-6 col-lg-12"><a href="">Meu passado me condena</a></li>
                                <li class="col-xs-12 col-md-6 col-lg-12"><a href="">Criolo</a></li>
                                <li class="col-xs-12 col-md-6 col-lg-12"><a href="">Zootopia</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hd-bottom">
        <div class="row">
            <div class="col-xs-12 col-md-3">
                <div class="hd-local">
                    <a class="hd-local-link hd-link collapsed" data-toggle="collapse" href="#hd-local-cont">
                        <svg class="svg-icon hd-local-ic-1 valign-middle" width="25" height="25">
                            <use xlink:href="#icon-city" />
                        </svg>
                        São josé do vale do Rio Preto
                        <svg class="svg-icon hd-local-ic-2 valign-middle" width="25" height="25">
                            <use xlink:href="#icon-arrow-top-2" />
                        </svg>
                    </a>
                    <div class="hd-local-cont hd-cont collapse" id="hd-local-cont">
                        <div class="hd-cont-wp">
                            <form action="#">
                                <div class="form-group">
                                    <select class="form-control" id="hd-form-state">
                                        <option>Selecione o estado</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control" id="hd-form-state">
                                        <option>Selecione a cidade</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn w-100 btn-primary">TROCAR CIDADE</button>
                            </form>
                            <a class="hd-local-update" href="#">
                                <svg class="svg-icon valign-middle ic-ingresso" width="20" height="20">
                                    <use xlink:href="#icon-gps" />
                                </svg>
                                Atualizar localização
                            </a>
                            <div class="latest-locals hd-local-places">
                                <strong>Ultimos Locais</strong>
                                <ul>
                                    <li><a href="">Niterói</a></li>
                                    <li><a href="">São Gonçalo</a></li>
                                    <li><a href="">Alcântara</a></li>
                                    <li><a href="">Árvore Seca</a></li>
                                    <li><a href="">Colombia</a></li>
                                </ul>
                            </div>
                            <div class="suggestion-locals hd-local-places">
                                <strong>Sugestões</strong>
                                <ul>
                                    <li><a href="">Mangueira</a></li>
                                    <li><a href="">Salgueiro</a></li>
                                    <li><a href="">Turano</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-9">
                <nav class="hd-main-menu">
                    <ul>
                        <li class="hd-mm-cinema active">
                            <a href="#">Cinema</a>
                        </li>
                        <li class="hd-mm-theater"><a href="#">Teatro</a></li>
                        <li class="hd-mm-show"><a href="#">Show</a></li>
                        <li class="hd-mm-event"><a href="#">Evento</a></li>
                        <li class="hd-mm-circus"><a href="#">Circo</a></li>
                        <li class="hd-mm-promo"><a href="#">Promoção</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>



{% endexample %}
