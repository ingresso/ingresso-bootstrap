---
layout: docs
title: Tables
group: ingresso-components
---

## Example


{% example html %}
<table class="table table-checkout">
    <caption>Resumo de Valores</caption>
    <thead class="table-thead">
        <tr>
            <th colspan="2">
              <span class="tit2-icon header-tit">
          <svg class="svg-icon valign-middle" width="30" height="30">
            <use xlink:href="#icon-total-2" />
          </svg>
          <span class="tit-txt">
            Resumo de Valores
          </span>
              </span>
            </th>
        </tr>
    </thead>
    <tfoot class="table-foot">
        <tr class="tb-discount">
            <td class="tb-lb">Desconto</td>
            <td class="tb-value">R$ 0,00</td>
        </tr>
        <tr class="table-total">
            <td class="tb-lb">Total</td>
            <td class="tb-value">R$ 33,82</td>
        </tr>
    </tfoot>
    <tbody class="table-body">
        <tr>
            <td colspan="2" class="tb-event">
              <span class="tit1-icon">
          <svg class="svg-icon valign-middle" width="25" height="25">
            <use xlink:href="#icon-movie" />
          </svg>
                <span class="tit-txt">Esquadrão Suicida</span>
              </span>
            </td>
        </tr>
        <tr>
            <td class="tb-lb">(1) Inteira</td>
            <td class="tb-value">R$ 19,00</td>
        </tr>
        <tr>
            <td class="tb-lb">(1) Meia</td>
            <td class="tb-value">R$ 9,50</td>
        </tr>
        <tr class="tb-service">
            <td class="tb-lb">Conveniência</td>
            <td class="tb-value">R$ 5,32</td>
        </tr>
    </tbody>
</table>
{% endexample %}

