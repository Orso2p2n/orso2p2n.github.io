---
layout: post
post_type: portfolio
permalink: /portfolio/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

title: Slime Invasion
summary: Puzzle game developed as my second semester project, during my first year at ICAN.
image: /assets/img/posts/portfolio/slime-invasion/header.png
show_image: true
date_override: 05/2019
tags: [Construct 2, Game Development, Pixel Art, Programming, Student Project]
---

**Slime Invasion** is a puzzle game, developed as my second semester project, during my first year at [ICAN](https://www.ican-design.fr/).

We had to design and develop a game in the "Tetris-like" genre in Construct 2.

## Itch.io

Slime Invasion is playable on [itch.io](https://orsos.itch.io/slime-invasion).

## Gameplay

In Slime Invasion, the goal of the player is to create a certain number of shapes per level, by **arranging the slimes following them**. They also have to make sure that the number of slimes on screen stays under a certain threshold.

The slimes following the player multiply every three moves.

When a shape is created, it will become a **part of the level's collision**.

Also, if slimes get separated from the line following the player, they will turn into "parasites", and multiply every move, quickly increasing the number of slimes on screen.

{% include embed/youtube.html id='d3_nELaHZXs' %}