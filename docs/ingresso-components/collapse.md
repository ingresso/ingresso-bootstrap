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

The see more description is basically follow the example below. A div called `collapse-description` encompassing tag `<p>` and `<a>`. In the `<p>` tag add `id="collapse-more-text"` and make reference in the href.

{% callout info %}
**This component is made for the mobile version , so to view set your browser to mobile version.**
{% endcallout %} 

## Example

{% example html %}

<div class="collapse-description">
  <p class="collapse" id="collapse-more-text">Dois amigos, o diretor Miguel (Gregorio Duvivier) e o ator Rodrigo (Fabio Porchat), são premiados no mais importante festival de cinema do mundo. Eles saem para comemorar e, depois de muitos drinques, assinam um contrato vitalício em que prometem trabalhar juntos para sempre. Naquela mesma noite, porém, Miguel desaparece misteriosamente no banheiro do quarto do hotel, sem deixar vestígios. Dez anos se passam. Rodrigo volta ao mesmo festival, agora como jurado, e assim que entra no mesmo quarto onde havia se hospedado uma década atrás, dá de cara com Miguel. Agora com barbas e cabelos longos, o amigo conta que foi abduzido por seres alienígenas e levado ao centro da Terra, onde presenciou uma rebelião de escravos. Agora, pretende contar essa história em um filme. Já famoso, Rodrigo desconfia da sanidade do amigo, mas será obrigado a honrar o contrato, mesmo sabendo que ele poderá destruir não apenas sua carreira, mas sua vida.</p>
  <a data-toggle="collapse" class="collapse-see-more text-xs-center collapsed" href="#collapse-more-text">Continuar lendo</a>
</div>

{% endexample %}
