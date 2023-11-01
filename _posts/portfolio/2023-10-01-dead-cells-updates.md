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