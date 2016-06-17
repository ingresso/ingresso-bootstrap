---
layout: docs
title: Tags
group: ingresso-components
---

Small and adaptive tag for adding context to just about any content.

## Example

Tags scale to match the size of the immediate parent element by using relative font sizing and `em` units.

Add any of the below mentioned modifier classes to change the appearance of a tag.

{% example html %}
<span class="tag tag-rating">Classificação</span>
<span class="tag tag-subtitle">Legenda</span>
<span class="tag tag-session">Sessão</span>
<span class="tag tag-room">Sala</span>
<span class="tag tag-movies">Filmes</span>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
