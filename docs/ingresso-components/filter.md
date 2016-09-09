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
    <ul class="list-group list-group-nostyle filter-options">
      <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
      <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
      <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
    </ul>
  </div>
</div>
<div role="listbox" class="filter filter-has-val">
  <span class="filter-head">
    <span class="filter-label">Nome do filtro</span>
    <span class="filter-val">Opção 1</span>
    <span class="filter-action"></span>
  </span>
  <ul class="list-group list-group-nostyle filter-options">
    <li role="option" class="list-group-item filter-it"><a href="#">opção 1</a></li>
    <li role="option" class="list-group-item filter-it"><a href="#">opção 2</a></li>
    <li role="option" class="list-group-item filter-it"><a href="#">opção 3</a></li>
  </ul>
</div>
{% endexample %}
