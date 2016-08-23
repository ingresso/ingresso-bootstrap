---
layout: docs
title: Tables
group: ingresso-components
---

## Example


{% example html %}
<table class="table table-checkout">
    <thead class="table-thead">
        <tr>
            <th colspan="2">
              Title
            </th>
        </tr>
    </thead>
    <tfoot class="table-foot">
        <tr class="tb-discount">
            <td class="tb-lb">Price discount</td>
            <td class="tb-value">R$ 0,00</td>
        </tr>
        <tr class="table-total">
            <td class="tb-lb">Price total</td>
            <td class="tb-value">R$ 33,82</td>
        </tr>
    </tfoot>
    <tbody class="table-body">
        <tr>
            <td colspan="2" class="tb-event">
                Event Name
            </td>
        </tr>
        <tr>
            <td class="tb-lb">Price type 1</td>
            <td class="tb-value">R$ 19,00</td>
        </tr>
        <tr>
            <td class="tb-lb">Price type 2</td>
            <td class="tb-value">R$ 9,50</td>
        </tr>
        <tr class="tb-service">
            <td class="tb-lb">Price type 3</td>
            <td class="tb-value">R$ 5,32</td>
        </tr>
    </tbody>
</table>

{% endexample %}

