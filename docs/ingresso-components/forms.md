---
layout: docs
title: Forms
group: ingresso-components
---

Bootstrap provides several form control styles, layout options, and custom components for creating a wide variety of forms.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Ingresso Form controls

Ingresso's form controls with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices. The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes.

Remember, since Bootstrap utilizes the HTML5 doctype, **all inputs must have a `type` attribute**.

{% example html %}
  <div class="form-group fl-form-group">
    <label class="fl-label" for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="text-muted">We'll never share your email with anyone else.</small>
  </div>
{% endexample %}

## Ingresso Form Controls with Icons

The only difference is the addition of an SVG . Remember to change the `svg` according to what you need. 

{% example html %}
  <div class="form-group fl-form-group">
    <span class="form-icon-group">
      <svg aria-label="Email" class="svg-icon" width="23" height="23">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-mail"></use>
      </svg>
    </span>
    <label class="fl-label" for="exampleInputEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group fl-form-group">
    <span class="form-icon-group">
      <svg aria-label="Senha" class="svg-icon" width="23" height="23">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-lock-2"></use>
      </svg>
    </span>
    <label class="fl-label" for="exampleInputPassword2">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
  </div>
{% endexample %}

## Ingresso Form Controls with Buttom

Button added in the form control. It is easy to use, add the tag `<button>` and the `form-group-btn` class.

{% example html %}
  <div class="form-group fl-form-group form-group-btn">
    <label class="fl-label" for="exampleCEP1">CEP</label>
    <input type="combo" class="form-control" id="exampleCEP1" aria-describedby="cepHelp" placeholder="CEP">
    <button type="button" class="btn btn-primary">OK</button>
  </div>
{% endexample %}

## Ingresso Combo Form Controls

The control form combo works with grid. A div with the class `form-group-combo` is added around two `form-group` and configured with the grids of Bootstrap . The grid configuration can be seen [here]({{ site.baseurl }}/layout/flexbox-grid/).

{% example html %}
  <div class="form-group-combo row">
    <div class="form-group fl-form-group frm-grp-01 col-xs">
      <label class="fl-label" for="exampleDDD1">DDD</label>
      <input type="combo" class="form-control" id="exampleDDD1" aria-describedby="dddHelp" placeholder="DDD">
    </div>
    <div class="form-group fl-form-group frm-grp-02 col-xs-9">
      <label class="fl-label" for="exampleTel1">Telefone</label>
      <input type="combo" class="form-control" id="exampleTel1" aria-describedby="telHelp" placeholder="Telefone">
    </div>
  </div>
{% endexample %}

## Ingresso Form Validations

Bootstrap includes validation styles for danger, warning, and success states on form controls.

- To use, add `.has-warning`, `.has-danger`, or `.has-success` to the parent element. Any `.form-control-label`, `.form-control`, and `.text-help` within that element will receive the validation styles.
- Validation icons are `url()`s configured via Sass variables that are applied to `background-image` declarations for each state.
- You may use your own base64 PNGs or SVGs by updating the Sass variables and recompiling.
- Icons can also be disabled entirely by setting the variables to `none` or commenting out the source Sass.

{% example html %}
  <div class="form-group fl-form-group has-success">
    <label class="fl-label" for="exampleInputEmail2">Email address</label>
    <input type="email" class="form-control form-control-success" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group fl-form-group has-warning">
    <label class="fl-label" for="exampleInputEmail3">Email address</label>
    <input type="email" class="form-control form-control-warning" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group fl-form-group has-danger">
    <label class="fl-label" for="exampleInputEmail4">Email address</label>
    <input type="email" class="form-control form-control-danger" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="Enter email">
    <span class="frm-msg-error">É obrigatório preencher o Email.</span>
  </div>
{% endexample %}

## Ingresso Password Security Level

{% example html %}

<div class="security-level">
    <span>Sua senha está:</span>
    <span class="sl-wp">
      <span class="sl-level"></span>
      <span class="sl-level"></span>
      <span class="sl-level"></span>
      <span class="sl-level"></span>
    </span>
    <span class="sl-1">Muito Simples</span>
</div>

{% endexample %}

## Ingresso Amount

{% example html %}

<div class="amount-group">
  <span class="ic-rounded ic-r-2">
    <a class="amt-less ic-r-ic" href="">
      <svg class="svg-icon" width="30" height="30">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-less"></use>
          </svg>
    </a>
  </span>
  <span class="amt-number">0</span>
  <span class="ic-rounded ic-r-2">
    <a class="amt-plus ic-r-ic" href="">
      <svg class="svg-icon" width="30" height="30">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
      </svg>
    </a>
  </span>
</div>

{% endexample %}
