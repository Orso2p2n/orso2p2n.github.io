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

## Introduction

During my two and a half years at [Evil Empire](https://evilempirestudio.com/), I worked on the game _Dead Cells_ as a Gameplay Programmer.

_Dead Cells_ is a 2D side-scrolling action roguelike, originally developed by [Motion Twin](https://motiontwin.com/) and released in August 2018. They also developed and released the first DLC for the game, [_Rise of the Giant_](https://deadcells.wiki.gg/wiki/Rise_of_the_Giant_DLC), in March 2019.

Evil Empire was then founded by a few Motion Twin members as a means to keep developing updates and DLCs, while the rest of the team moved on to other projects. Artists and programmers were recruited, and together they developed from update 1.3 to 2.4, as well as two DLCs ([_Bad Seed_](https://deadcells.wiki.gg/wiki/The_Bad_Seed_DLC) and [_Fatal Falls_](https://deadcells.wiki.gg/wiki/Fatal_Falls_DLC)). Around the update 2.4, the Dead Cells team was renewed, with its former members moving on to other projects. This is when I got recruited, first as an internship, then as a long-term contract.

Together with this new team, we developed updates 2.5 to 3.5, as well as the DLCs _Queen and the Sea_ and _Return to Castlevania_. 

## Technologies Used

You can find below a list of tools and softwares that programmers regularly interacted with throughout development. A lot of them are open-source, which means that we could create forks of the source code and add functionalities specific to _Dead Cells_ if needed.

[Haxe](https://haxe.org/)
: Programming language, in which all of the game is coded.

[Heaps.io](https://heaps.io/)
: Rendering engine, written in Haxe.

[CastleDB](http://castledb.org/)
: Database management software, used for storing almost all of the static data of the game.

[Tiled](https://www.mapeditor.org/)
: Tile-based level design software, to create the "rooms" used to generate the game's levels.

[TexturePacker](https://www.codeandweb.com/texturepacker)
: Spritesheet generator, used to compile art exports into a single texture.

## Updates I Worked On

<div markdown="0">
<div id="dead-cells-list">
  {% assign all_posts = site.posts | where: 'post_type', 'portfolio' %}
  {% assign all_posts = all_posts | where: 'dead_cells', 'true' %}

  {% for post in all_posts %}
    <a href="{{ post.url | relative_url }}" class="card-wrapper">
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