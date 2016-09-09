---
layout: docs
title: Filter
group: ingresso-components
---

Small and adaptive tag for adding context to just about any content.

## Example

Tags scale to match the size of the immediate parent element by using relative font sizing and `em` units.

{% example html %}
<div role="listbox" class="filter">
  <span class="filter-head collapsed" data-toggle="collapse" href="#tab-main-content01">
    <span class="filter-label">Nome do filtro</span>
    <span class="filter-val"></span>
    <span class="filter-action"></span>
  </span>
  <div class="filter-content collapse" id="tab-main-content01">
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
<div role="listbox" class="filter filter-has-val">
  <span class="filter-head" data-toggle="collapse" href="#tab-main-content02">
    <span class="filter-label">Nome do filtro</span>
    <span class="filter-val">opção 1</span>
    <span class="filter-action"></span>
  </span>
  <div class="filter content" id="tab-main-content02">
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
{% endexample %}
