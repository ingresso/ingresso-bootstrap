---
layout: docs
title: Link dropdown
group: ingresso-components
---

Use any button to trigger a dropdown menu by placing it within a `.btn-group` and providing the proper dropdown menu markup.

{% callout danger %}
#### Plugin dependency

Button dropdowns require the [dropdown plugin]({{ site.baseurl }}/components/dropdowns/) to be included in your version of Bootstrap.
{% endcallout %}

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

### Single button dropdowns

Turn a button into a dropdown toggle with some basic markup changes.

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Default</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
</div>

{% highlight html %}
<!-- Single button -->
<div class="btn-group">
  <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
{% endhighlight %}
