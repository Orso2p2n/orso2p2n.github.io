---
layout: post
post_type: portfolio
permalink: /portfolio/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

title: Dead Cells Updates
summary: Updates and DLCs for the game Dead Cells.
image: /assets/img/posts/portfolio/dead-cells-updates/header.png
date_override: 2021 - 2023
tags: [Programming,Haxe]
---

## Portfolio Test



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a mauris vestibulum neque pulvinar condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce elementum nisl et pharetra fringilla. Morbi vitae congue enim, eu congue justo. Cras posuere orci eget tortor aliquet, et suscipit ipsum pretium. Donec ut facilisis lacus, non aliquet augue. Praesent blandit tellus et risus ultrices consequat. Maecenas tempor vulputate consectetur. Proin eu est quis augue varius condimentum nec sed sapien. Praesent enim libero, tincidunt at venenatis nec, egestas eu felis. Aenean ultrices nibh id risus vehicula, et ultrices elit placerat. Sed pretium mollis fringilla. Cras at diam quam. Nulla sit amet auctor mauris. Praesent erat elit, condimentum vitae orci non, cursus accumsan justo. Fusce porttitor efficitur magna, a ultricies risus porttitor eu.

Cras non dictum justo, id pulvinar felis. Curabitur sed porttitor risus, a gravida dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce a magna sed nisi blandit aliquet. Praesent at erat non metus congue suscipit. Morbi tempus dolor ut tempor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

![Image](/assets/img/posts/portfolio/dead-cells-updates/25.png){: width="972" height="589" }
_Version 2.5_

<div markdown="0">
<div id="dead-cells-list">
  {% assign all_posts = site.posts | where: 'post_type', 'portfolio' %}
  {% assign all_posts = all_posts | where: 'dead_cells', 'true' %}

  {% for post in all_posts %}
    <a href="{{ post.url | relative_url }}">
      <div class="card post-preview flex-md-row-reverse">
        <img src="{{post.image}}" w="15" h="8" class="refactor-preview">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title my-2 mt-md-0">
            {{ post.title }}
          </h1>
          <div class="card-text post-content mt-0 mb-2">
            <p>
              {{ post.summary | truncate: 200 | escape }}
            </p>
          </div>
          <div class="post-meta flex-grow-1 d-flex align-items-end">
            <div class="me-auto">
              <!-- posted date -->
              <i class="far fa-calendar fa-fw me-1"></i>
              {% include datetime.html date=post.date lang=lang %}
            </div>
          </div>
          <!-- .post-meta -->
        </div>
        <!-- .card-body -->
      </div>
    </a>
  {% endfor %}
</div>
</div>