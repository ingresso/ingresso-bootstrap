---
layout: docs
title: Collapse
group: ingresso-components
---

Use the same rules as the accordion tabs. Put the id of the parent node #index-tabs, in the children data attributes data-parent="#index-tabs".

There is a relationship between the parent and the children, to make the active tab close the others.

{% callout info %}
**Same rules and same classes**  

Be sure to use the same rules at bootstrap default accordion.
{% endcallout %}

## Example

{% example html %}

<!-- first tab -->
<a class="tab-accordion collapsed model1" role="button" data-toggle="collapse" data-parent="#tab" href="#tab-main-content01" aria-expanded="true" aria-controls="tab-main-content01">Test Tab01</a>
<div id="tab-main-content01" class="tab-content collapse">
   <div class="tab-cont-wp">...</div>
</div>

<!-- second tab -->
<a class="tab-accordion collapsed model2" role="button" data-toggle="collapse" data-parent="#tab" href="#tab-main-content02" aria-expanded="true" aria-controls="tab-main-content02">Test Tab02</a>
<div id="tab-main-content02" class="tab-content collapse">
   <div class="tab-cont-wp">...</div>
</div>

{% endexample %}
