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

<!-- inactive tab -->
<a class="tab-accordion collapsed model2 tab-inactive" role="button" data-toggle="collapse" data-parent="#tab" href="#tab-main-contentInactive" aria-expanded="true" aria-controls="tab-main-contentInactive">Test Tab Inactive</a>
<div id="tab-main-contentInactive" class="tab-content tab-inactive collapse">
   <div class="tab-cont-wp">...</div>
</div>

{% endexample %}

## Example
Para usar a versão com icone, deve-se utilizar a estrutura abaixo, com o elemento pai posicionado relativo.

{% example html %}

<!-- icon tab -->
<div style="position:relative;">
<a class="icon-accordion collapsed" role="button" data-toggle="collapse" href="#tab-main-content03">
  <span class="ia-txt">ver detalhes</span>
  <span class="ic-rounded ic-rd-ingresso">
    <svg class="svg-icon">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-top-2"></use>
    </svg>
</span>
</a>
</div>
<div id="tab-main-content03" class="tab-content collapse">
   <div class="tab-cont-wp">Lorem Ipsum</div>
</div>

{% endexample %}

The see more description is basically follow the example below. A div called `collapse-description` encompassing tag `<p>` and `<a>`. In the `<p>` tag add `id="collapse-more-text"` and make reference in the href.

{% callout info %}
**This component is made for the mobile version , so to view set your browser to mobile version.**
{% endcallout %} 

## Example

Esse componente é específico para mobile. A descrição deve ser envolvida pela div com a classe `collapse-description`, seu texto deve conter a classe `collapse` e um id para ser referenciado pelo link âncora. Esse id pode ser o que você desejar.

{% example html %}

<div class="collapse-description">
  <p class="collapse" id="collapse-more-text">Dois amigos, o diretor Miguel (Gregorio Duvivier) e o ator Rodrigo (Fabio Porchat), são premiados no mais importante festival de cinema do mundo. Eles saem para comemorar e, depois de muitos drinques, assinam um contrato vitalício em que prometem trabalhar juntos para sempre. Naquela mesma noite, porém, Miguel desaparece misteriosamente no banheiro do quarto do hotel, sem deixar vestígios. Dez anos se passam. Rodrigo volta ao mesmo festival, agora como jurado, e assim que entra no mesmo quarto onde havia se hospedado uma década atrás, dá de cara com Miguel. Agora com barbas e cabelos longos, o amigo conta que foi abduzido por seres alienígenas e levado ao centro da Terra, onde presenciou uma rebelião de escravos. Agora, pretende contar essa história em um filme. Já famoso, Rodrigo desconfia da sanidade do amigo, mas será obrigado a honrar o contrato, mesmo sabendo que ele poderá destruir não apenas sua carreira, mas sua vida.</p>
  <a data-toggle="collapse" class="collapse-see-more text-xs-center collapsed" href="#collapse-more-text">Continuar lendo</a>
</div>

{% endexample %}

## Example

{% example html %}
 
<div class="collapse-radio">
  <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="cr-lnk collapsed">
      <label class="custom-control custom-radio">
        <input id="radio1" name="radio" type="radio" class="custom-control-input">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">
          <svg class="svg-icon" width="30" height="30">
            <use xlink:href="#icon-payment-card" />
          </svg>
          Cartão de crédito
          <span class="cr-value">R$ 50,00</span>
        </span>
      </label>
  </a>
  <div class="collapse" id="collapseExample">
    <div class="cr-content">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>  

{% endexample %}

## Example

{% example html %}

<!-- add/remove tab -->
<div class="add-remove-tab">
  <a class="tab-accordion collapsed model2" role="button" data-toggle="collapse" data-parent="#tab" href="#tab-main-content04" aria-expanded="true" aria-controls="tab-main-content04">
    <svg class="svg-icon valign-middle ic-ingresso" width="30" height="30">
      <use xlink:href="#icon-tag" />
    </svg>
    <span class="art-txt">ingresso pré-pago ou vale-ingresso</span>
  </a>
  <div id="tab-main-content04" class="tab-content collapse">
     <div class="tab-cont-wp">
       <div class="form-group fl-form-group form-group-btn">
        <label class="fl-label" for="cupom-code">Código do cupom</label>
        <input type="text" class="form-control" id="cupom-code"  placeholder="Código do cupom"/>
        <button type="button" class="btn btn-primary">OK</button>
       </div>
     </div>
  </div>
</div>
{% endexample %}
