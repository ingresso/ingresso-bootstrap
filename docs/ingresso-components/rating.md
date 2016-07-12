---
layout: docs
title: Rating
group: ingresso-components
---

Rating for Ingresso Bootstrap

## Example

It's a simple svg image. The configuration is basically based on the `< rect >` . Changing your `width`.

{% example html %}

<svg class="rating r0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
  <defs>
    <mask id="svg-stars-mask-0" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
      <rect x="0" y="0" width="0" height="14" fill="white"/>
    </mask>
    <g id="stars-0">
      <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
    </g>
  </defs>
  <use xlink:href="#stars-0" fill="#C7C7C7"/>
  <use xlink:href="#stars-0" fill="#F5AA19" mask="url(#svg-stars-mask-0)"/>
</svg>

<br/>

<svg class="rating r1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
  <defs>
    <mask id="svg-stars-mask-1" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
      <rect x="0" y="0" width="15" height="14" fill="white"/>
    </mask>
    <g id="stars-1">
      <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
    </g>
  </defs>
  <use xlink:href="#stars-1" fill="#C7C7C7"/>
  <use xlink:href="#stars-1" fill="#F5AA19" mask="url(#svg-stars-mask-1)"/>
</svg>

<br/>

<svg class="rating r2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
  <defs>
    <mask id="svg-stars-mask-2" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
      <rect x="0" y="0" width="30" height="14" fill="white"/>
    </mask>
    <g id="stars-2">
      <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
    </g>
  </defs>
  <use xlink:href="#stars-2" fill="#C7C7C7"/>
  <use xlink:href="#stars-2" fill="#F5AA19" mask="url(#svg-stars-mask-2)"/>
</svg>

<br/>

<svg class="rating r3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
  <defs>
    <mask id="svg-stars-mask-3" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
      <rect x="0" y="0" width="45" height="14" fill="white"/>
    </mask>
    <g id="stars-3">
      <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
    </g>
  </defs>
  <use xlink:href="#stars-3" fill="#C7C7C7"/>
  <use xlink:href="#stars-3" fill="#F5AA19" mask="url(#svg-stars-mask-3)"/>
</svg>

<br/>

<svg class="rating r4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
  <defs>
    <mask id="svg-stars-mask-4" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
      <rect x="0" y="0" width="60" height="14" fill="white"/>
    </mask>
    <g id="stars-4">
      <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
    </g>
  </defs>
  <use xlink:href="#stars-4" fill="#C7C7C7"/>
  <use xlink:href="#stars-4" fill="#F5AA19" mask="url(#svg-stars-mask-4)"/>
</svg>

<br/>

<svg class="rating r5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="75" height="14" viewBox="0 0 75 14" xml:space="preserve">
  <defs>
    <mask id="svg-stars-mask-5" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="14">
      <rect x="0" y="0" width="75" height="14" fill="white"/>
    </mask>
    <g id="stars-5">
      <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(15,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(30,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(45,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
      <path transform="translate(60,0)" d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"/>
    </g>
  </defs>
  <use xlink:href="#stars-5" fill="#C7C7C7"/>
  <use xlink:href="#stars-5" fill="#F5AA19" mask="url(#svg-stars-mask-5)"/>
</svg>

{% endexample %}

{% example html %}

<div class="rating-details">
  <div class="rd-number">
    <svg class="rating" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="20" height="16" viewBox="0 0 15 16" xml:space="preserve">
        <defs>
            <mask id="svg-stars-mask-4" maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="16">
                <rect x="0" y="0" width="30" height="16" fill="white"></rect>
            </mask>
            <g id="stars-4">
                <path d="M7.2 0.44l-2.25 4.5H0.2l3.56 3.25 -1 5.38L7.2 11.37l4.44 2.19 -1-5.37 3.56-3.25H9.45L7.2 0.44z"></path>
            </g>
        </defs>
        <use xlink:href="#stars-4" fill="#c3c3c3"></use>
    </svg>
    <span class="star-number">5</span>
  </div>
  <progress class="progress progress-warning" value="0" max="100"></progress>
</div>

{% endexample %}
