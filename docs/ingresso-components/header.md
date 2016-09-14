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
                <a class="hd-um-link hd-link" data-toggle="collapse" data-parent="#header" href="#hd-umenu-cont">
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
                            <ul id="tab">
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
                <a class="hd-search-link" data-toggle="collapse" data-parent="#header" href="#hd-search-cont">
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
                    <a class="hd-local-link hd-link collapsed" data-toggle="collapse" data-parent="#header" href="#hd-local-cont">
                        <svg class="svg-icon hd-local-ic-1 valign-middle" width="25" height="25">
                            <use xlink:href="#icon-city" />
                        </svg>
                        São josé do vale do Rio Preto
                        <svg class="svg-icon hd-local-ic-2 valign-middle" width="25" height="25">
                            <use xlink:href="#icon-arrow-top-2" />
                        </svg>
                    </a>
                    <div class="hd-local-cont hd-cont collapse" id="hd-local-cont">
                        <div class="hd-cont-wp row">
                            <div class="hd-local-form col-xs-12 col-md-6 col-lg-12">
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
                            </div>
                            <div class="hd-local-options col-xs-12 col-md-5 col-lg-12">
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
            </div>
            <div class="col-xs-12 col-md-9">
                <nav class="hd-main-menu">
                    <ul class="hd-mm-lt">
                        <li class="hd-mm-it hd-mm-cinema active">
                            <a class="hd-mm-lnk collapsed" data-toggle="collapse" data-parent="#header" href="#hd-mm-cont1">Cinema</a>
                            <div class="hd-mm-cont hd-cont collapse" id="hd-mm-cont1">
                              <div class="hd-cont-wp">
                                <div class="row hd-mm-options">
                                  <div class="col-xs-8">
                                    <a class="hd-mm-cat-link" href="#">Ir para Home Cinema</a>
                                  </div>
                                  <div class="col-xs-4 text-xs-right">
                                    <a href="#" data-close-collapse>
                                      <svg class="svg-icon ic-ingresso" width="44" height="44">
                                        <use xlink:href="#icon-arrow-top-1" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12 col-md-5 col-lg-12 hd-mm-filters">
                                        <div class="row">
                                          <div class="col-xs-12 col-lg">
                                            <div role="listbox" class="filter">
                                              <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content01">
                                                <span class="filter-label">Gênero</span>
                                                <span class="filter-val"></span>
                                                <span class="filter-action"></span>
                                              </span>
                                              <div class="filter-content collapse" id="filter-content01">
                                                <div class="filter-wp">
                                                  <ul class="list-group list-group-nostyle filter-options">
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-xs-12 col-lg">
                                            <div role="listbox" class="filter">
                                              <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content02">
                                                <span class="filter-label">Filmes</span>
                                                <span class="filter-val"></span>
                                                <span class="filter-action"></span>
                                              </span>
                                              <div class="filter-content collapse" id="filter-content02">
                                                <div class="filter-wp">
                                                  <ul class="list-group list-group-nostyle filter-options">
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-xs-12 col-lg">
                                            <div role="listbox" class="filter">
                                              <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content03">
                                                <span class="filter-label">Bairro</span>
                                                <span class="filter-val"></span>
                                                <span class="filter-action"></span>
                                              </span>
                                              <div class="filter-content collapse" id="filter-content03">
                                                <div class="filter-wp">
                                                  <ul class="list-group list-group-nostyle filter-options">
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-xs-12 col-lg">
                                            <div role="listbox" class="filter">
                                              <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content04">
                                                <span class="filter-label">Cinemas</span>
                                                <span class="filter-val"></span>
                                                <span class="filter-action"></span>
                                              </span>
                                              <div class="filter-content collapse" id="filter-content04">
                                                <div class="filter-wp">
                                                  <ul class="list-group list-group-nostyle filter-options">
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                                    <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-xs-12 col-lg">
                                            <div role="listbox" class="filter">
                                              <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content05">
                                                <span class="filter-label">Data</span>
                                                <span class="filter-val"></span>
                                                <span class="filter-action"></span>
                                              </span>
                                              <div class="filter-content collapse" id="filter-content05">
                                                <div class="filter-wp">
                                                  <ul class="date-lt date-month-lt2">
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                    <li class="date-it is-selected">
                                                      <a href="" class="date-lk">
                                                        <time datetime="28/07/2016" title="2015-07">
                                                          <span class="date-info">JUL</span><br>
                                                          <strong class="date-main-info">28</strong>
                                                        </time>
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-xs-12 col-lg-2 offset-lg-10">
                                                <div class="hd-mm-button">
                                                    <button type="submit" class="btn btn-primary btn-block btn-filter">Filtrar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6 col-lg-12 week-highlights">
                                        <strong class="event-name m-b-1 d-block">Destaque da semana</strong>
                                        <a href="#">
                                            <img class="w-100 m-b-05" src="http://lorempixel.com/g/400/200/" alt="imagem exemplo" />
                                            <span>Como eu era antes de você</span>
                                        </a>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li class="hd-mm-it hd-mm-theater">
                            <a class="hd-mm-lnk collapsed" data-toggle="collapse" data-parent="#header" href="#hd-mm-cont2">Teatro</a>
                            <div class="hd-mm-cont hd-cont collapse" id="hd-mm-cont2">
                              <div class="hd-cont-wp">
                                <div class="row hd-mm-options">
                                  <div class="col-xs-8">
                                    <a class="hd-mm-cat-link" href="#">Ir para Home Teatro</a>
                                  </div>
                                  <div class="col-xs-4 text-xs-right">
                                    <a href="#" data-close-collapse>
                                      <svg class="svg-icon ic-ingresso" width="44" height="44">
                                        <use xlink:href="#icon-arrow-top-1" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div class="row hd-mm-filters">
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content26">
                                        <span class="filter-label">Gênero</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content26">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content27">
                                        <span class="filter-label">Filmes</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content27">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content28">
                                        <span class="filter-label">Bairro</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content28">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content29">
                                        <span class="filter-label">Cinemas</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content29">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content30">
                                        <span class="filter-label">Data</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content30">
                                        <div class="filter-wp">
                                          <ul class="date-lt date-month-lt2">
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row hd-mm-button">
                                  <div class="col-xs-12 col-md-2 offset-md-10">
                                    <button type="submit" class="btn btn-primary btn-block btn-filter">Filtrar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li class="hd-mm-it hd-mm-show">
                            <a class="hd-mm-lnk collapsed" data-toggle="collapse" data-parent="#header" href="#hd-mm-cont3">Show</a>
                            <div class="hd-mm-cont hd-cont collapse" id="hd-mm-cont3">
                              <div class="hd-cont-wp">
                                <div class="row hd-mm-options">
                                  <div class="col-xs-8">
                                    <a class="hd-mm-cat-link" href="#">Ir para Home Show</a>
                                  </div>
                                  <div class="col-xs-4 text-xs-right">
                                    <a href="#" data-close-collapse>
                                      <svg class="svg-icon ic-ingresso" width="44" height="44">
                                        <use xlink:href="#icon-arrow-top-1" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div class="row hd-mm-filters">
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content06">
                                        <span class="filter-label">Gênero</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content06">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content07">
                                        <span class="filter-label">Filmes</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content07">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content08">
                                        <span class="filter-label">Bairro</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content08">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content09">
                                        <span class="filter-label">Cinemas</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content09">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content10">
                                        <span class="filter-label">Data</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content10">
                                        <div class="filter-wp">
                                          <ul class="date-lt date-month-lt2">
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row hd-mm-button">
                                  <div class="col-xs-12 col-md-2 offset-md-10">
                                    <button type="submit" class="btn btn-primary btn-block btn-filter">Filtrar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li class="hd-mm-it hd-mm-event">
                            <a class="hd-mm-lnk collapsed" data-toggle="collapse" data-parent="#header" href="#hd-mm-cont4">Evento</a>
                            <div class="hd-mm-cont hd-cont collapse" id="hd-mm-cont4">
                              <div class="hd-cont-wp">
                                <div class="row hd-mm-options">
                                  <div class="col-xs-8">
                                    <a class="hd-mm-cat-link" href="#">Ir para Home Evento</a>
                                  </div>
                                  <div class="col-xs-4 text-xs-right">
                                    <a href="#" data-close-collapse>
                                      <svg class="svg-icon ic-ingresso" width="44" height="44">
                                        <use xlink:href="#icon-arrow-top-1" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div class="row hd-mm-filters">
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content11">
                                        <span class="filter-label">Gênero</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content11">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content12">
                                        <span class="filter-label">Filmes</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content12">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content13">
                                        <span class="filter-label">Bairro</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content13">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content14">
                                        <span class="filter-label">Cinemas</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content14">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content15">
                                        <span class="filter-label">Data</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content15">
                                        <div class="filter-wp">
                                          <ul class="date-lt date-month-lt2">
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row hd-mm-button">
                                  <div class="col-xs-12 col-md-2 offset-md-10">
                                    <button type="submit" class="btn btn-primary btn-block btn-filter">Filtrar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li class="hd-mm-it hd-mm-circus">
                            <a class="hd-mm-lnk collapsed" data-toggle="collapse" data-parent="#header" href="#hd-mm-cont5">Circo</a>
                            <div class="hd-mm-cont hd-cont collapse" id="hd-mm-cont5">
                              <div class="hd-cont-wp">
                                <div class="row hd-mm-options">
                                  <div class="col-xs-8">
                                    <a class="hd-mm-cat-link" href="#">Ir para Home Circo</a>
                                  </div>
                                  <div class="col-xs-4 text-xs-right">
                                    <a href="#" data-close-collapse>
                                      <svg class="svg-icon ic-ingresso" width="44" height="44">
                                        <use xlink:href="#icon-arrow-top-1" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div class="row hd-mm-filters">
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content16">
                                        <span class="filter-label">Gênero</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content16">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content17">
                                        <span class="filter-label">Filmes</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content17">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content18">
                                        <span class="filter-label">Bairro</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content18">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content19">
                                        <span class="filter-label">Cinemas</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content19">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content20">
                                        <span class="filter-label">Data</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content20">
                                        <div class="filter-wp">
                                          <ul class="date-lt date-month-lt2">
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row hd-mm-button">
                                  <div class="col-xs-12 col-md-2 offset-md-10">
                                    <button type="submit" class="btn btn-primary btn-block btn-filter">Filtrar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li class="hd-mm-it hd-mm-promo">
                            <a class="hd-mm-lnk collapsed" data-toggle="collapse" data-parent="#header" href="#hd-mm-cont6">Promoção</a>
                            <div class="hd-mm-cont hd-cont collapse" id="hd-mm-cont6">
                              <div class="hd-cont-wp">
                                <div class="row hd-mm-options">
                                  <div class="col-xs-8">
                                    <a class="hd-mm-cat-link" href="#">Ir para Home Promoção</a>
                                  </div>
                                  <div class="col-xs-4 text-xs-right">
                                    <a href="#" data-close-collapse>
                                      <svg class="svg-icon ic-ingresso" width="44" height="44">
                                        <use xlink:href="#icon-arrow-top-1" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div class="row hd-mm-filters">
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content21">
                                        <span class="filter-label">Gênero</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content21">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content22">
                                        <span class="filter-label">Filmes</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content22">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content23">
                                        <span class="filter-label">Bairro</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content23">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content24">
                                        <span class="filter-label">Cinemas</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content24">
                                        <div class="filter-wp">
                                          <ul class="list-group list-group-nostyle filter-options">
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 4</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 5</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 6</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 7</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 8</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 9</a></li>
                                            <li role="option" class="list-group-item filter-it"><a href="#">opção 10</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xs-12 col-lg">
                                    <div role="listbox" class="filter">
                                      <span class="filter-head collapsed js-md" data-toggle="collapse" href="#filter-content25">
                                        <span class="filter-label">Data</span>
                                        <span class="filter-val"></span>
                                        <span class="filter-action"></span>
                                      </span>
                                      <div class="filter-content collapse" id="filter-content25">
                                        <div class="filter-wp">
                                          <ul class="date-lt date-month-lt2">
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                            <li class="date-it is-selected">
                                              <a href="" class="date-lk">
                                                <time datetime="28/07/2016" title="2015-07">
                                                  <span class="date-info">JUL</span><br>
                                                  <strong class="date-main-info">28</strong>
                                                </time>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row hd-mm-button">
                                  <div class="col-xs-12 col-md-2 offset-md-10">
                                    <button type="submit" class="btn btn-primary btn-block btn-filter">Filtrar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
{% endexample %}
