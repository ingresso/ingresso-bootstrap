---
layout: docs
title: Lazyload
group: ingresso-components
---

# Usage
{% example html %}
<div class="row">
	<div class="col-xs-12">
		<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" data-lazyload alt="">
	</div>
	<div class="col-xs-12">
		<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" data-lazyload alt="">
	</div>
</div>
{% endexample %}

# Inside container
{% example html %}
<div data-lazyload class="row">
  <div class="col-xs-6">
  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  </div>
  <div class="col-xs-6">
  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  </div>
</div>
<div data-lazyload class="row">
  <div class="col-xs-6">
  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  </div>
  <div class="col-xs-6">
  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  </div>
</div>
{% endexample %}

# On Bootstrap Tabs
{% example html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home" role="tab" data-lazyload>Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#profile" role="tab" data-lazyload>Tab 2</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">
  	<div class="row">
  	  <div class="col-xs-6">
  	  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  	  </div>
  	  <div class="col-xs-6">
  	  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  	  </div>
  	</div>
  </div>
  <div class="tab-pane" id="profile" role="tabpanel">
  	<div class="row">
  	  <div class="col-xs-12">
  	  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  	  </div>
  	  <div class="col-xs-12">
  	  	<img class="img-fluid" data-original="https://ingresso-a.akamaihd.net/img/cinema/cartaz/14207_d.jpg" alt="">
  	  </div>
  	</div>
  </div>
</div>
{% endexample %}