---
layout: docs
title: Lazyload
group: ingresso-components
---

# Usage
{% example html %}
<div class="row">
	<div class="col-xs-12">
		<img data-src="/assets/img/lazyload_example/img1.jpg" height="800" data-lazyload alt="">
	</div>
	<div class="col-xs-12">
		<img data-src="/assets/img/lazyload_example/img2.jpg" height="800" data-lazyload alt="">
	</div>
</div>
{% endexample %}

# Inside container
{% example html %}
<div data-lazyload style="width:100%;overflow:auto;">
	<div style="width:8000px;">
	<img height="300" data-src="/assets/img/lazyload_example/img1.jpg" height="300" alt="" style="display:inline;">
	<img height="300" data-src="/assets/img/lazyload_example/img2.jpg" alt="" style="display:inline;">
	<img height="300" data-src="/assets/img/lazyload_example/img3.jpg" alt="" style="display:inline;">
	<img height="300" data-src="/assets/img/lazyload_example/img4.jpg" alt="" style="display:inline;">
	<img height="300" data-src="/assets/img/lazyload_example/img1.jpg" alt="" style="display:inline;">
	<img height="300" data-src="/assets/img/lazyload_example/img2.jpg" alt="" style="display:inline;">
	</div>
</div>
<div data-lazyload class="row">
	<div class="col-xs-6">
		<img class="img-fluid" data-src="/assets/img/lazyload_example/img1.jpg" alt="">
	</div>
	<div class="col-xs-6">
		<img class="img-fluid" data-src="/assets/img/lazyload_example/img2.jpg" alt="">
	</div>
</div>
{% endexample %}

# On Bootstrap Tabs
{% example html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<a class="nav-link active" data-toggle="tab" href="#tab1" role="tab" data-lazyload>Tab 1</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tab2" role="tab" data-lazyload>Tab 2</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tab3" role="tab" data-lazyload>Tab 2</a>
	</li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
	<div class="tab-pane active" id="tab1" role="tabpanel">
		<div class="row" data-lazyload>
			<div class="col-xs-6">
				<img class="img-fluid" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img1.jpg" alt="">
			</div>
			<div class="col-xs-6">
				<img class="img-fluid" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img2.jpg" alt="">
			</div>
		</div>
	</div>
	<div class="tab-pane" id="tab2" role="tabpanel">
		<div class="row" data-lazyload>
			<div class="col-xs-6">
				<img class="img-fluid" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img1.jpg" alt="">
			</div>
			<div class="col-xs-6">
				<img class="img-fluid" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img2.jpg" alt="">
			</div>
		</div>
	</div>
	<div class="tab-pane" id="tab3" role="tabpanel">
		<div style="width:100%;overflow:auto;" data-lazyload>
			<div style="width:3000px;">
					<img class="m-r-2" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img1.jpg" height="300" alt="">
					<img class="m-r-2" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img2.jpg" height="300" alt="">
					<img class="m-r-2" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img3.jpg" height="300" alt="">
					<img class="m-r-2" data-src="http://localhost:{{ site.port }}/assets/img/lazyload_example/img4.jpg" height="200" alt="">
			</div>
		</div>
	</div>
</div>
{% endexample %}
