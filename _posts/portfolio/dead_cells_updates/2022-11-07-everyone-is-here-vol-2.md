---
layout: post
post_type: portfolio
permalink: /portfolio/dead-cells-updates/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

dead_cells: true

title: Version 3.2 - Everyone is Here Vol. 2
summary: 'Second crossover event with new indie games, adding new weapons and outfits inspired by those games.'
image: /assets/img/posts/portfolio/dead-cells-updates/32/header.jpg
show_image: true
date: 2022-11-07
tags: [Programming,Haxe]
invisible: true
---

## Introduction

Update 3.2, officially named **Everyone is Here Vol. 2**, is a second instance of crossover update, with 6 new indie games, with the goal of bringing items and outfits inspired by those games into _Dead Cells_.

The 6 games we had the opportunity to work with were _Shovel Knight_, _Hotline Miami_, _Katana Zero_, _Risk of Rain 2_, _Terraria_ and _Slay the Spire_.

### Notable additions and changes

- **NEW** - _Shovel Knight_ content:
  - [King Scepter](https://deadcells.wiki.gg/wiki/King_Scepter), inspired by King Knight, makes the player dash forward, enter a spinning state if they touch anything, and let them bounce around on enemies.
  - [Shovel Knight Outfit](https://deadcells.wiki.gg/wiki/Outfits#Shovel_Knight_Outfit).
- **NEW** - _Hotline Miami_ content:
  - [Baseball Bat](https://deadcells.wiki.gg/wiki/Baseball_Bat), a fast weapon that inflicts critical damage on stunned enemies (with a special animation!).
  - [Modernized Bomber Outfit](https://deadcells.wiki.gg/wiki/Outfits#Modernized_Bomber_Outfit).
- **NEW** - _Katana Zero_ content:
  - [Throwable Objects](https://deadcells.wiki.gg/wiki/Throwable_Objects), fast-moving projectiles that stun enemies, with ammo that refills on kill.
  - [Zero Outfit](https://deadcells.wiki.gg/wiki/Outfits#Zero_Outfit).
- **NEW** - _Risk of Rain 2_ content:
  - [Laser Glaive](https://deadcells.wiki.gg/wiki/Laser_Glaive), throws a seeking projectile that bounces between enemies, with increased damage with each bounce.
  - [Commando Outfit](https://deadcells.wiki.gg/wiki/Outfits#Commando_Outfit).
- **NEW** - _Terraria_ content:
  - [Starfury](https://deadcells.wiki.gg/wiki/Starfury), landing a hit with this weapon summons a falling star that targets a nearby enemy.
  - [Familiar Outfit](https://deadcells.wiki.gg/wiki/Outfits#Familiar_Outfit).
- **NEW** - _Slay the Spire_ content:
  - [Diverse Deck](https://deadcells.wiki.gg/wiki/Diverse_Deck), one of the most complicated skills in the game. The deck is composed of 4 different cards, each with a Draw, Passive and Discard effect. The current card has its Passive in effect permanently, pressing the button will Discard it and Draw the next one, triggering the corresponding effects.
  - [Ironclad Outfit](https://deadcells.wiki.gg/wiki/Outfits#Ironclad_Outfit).

![](/assets/img/posts/portfolio/dead-cells-updates/32/32_all_outfits.png)
_All outfits, in order._

> A full list of changes can be found on the [Dead Cells Wiki](https://deadcells.wiki.gg/wiki/Version_3.2).
{: .prompt-info }

## What I worked on

### Risk of Rain 2 content

While I did not get to implement anything, I was in charge of designing the weapon, as well as being the go-to person for visual feedbacks, due to my extensive knowledge of the game.

The [Laser Glaive](https://deadcells.wiki.gg/wiki/Laser_Glaive) is a reference to the secondary ability of the [Huntress](https://riskofrain2.fandom.com/wiki/Huntress), one of the playable characters of _Risk of Rain 2_. Its behavior is pretty much a one-to-one recreation, up to the damage increase between bounces.

![](/assets/img/posts/portfolio/dead-cells-updates/32/laser_glaive.gif)
_Gif of the Laser Glaive being used in-game._

![](/assets/img/posts/portfolio/dead-cells-updates/32/huntress_commando.png){: width="125" .right}

We wanted to take inpiration from a _Risk of Rain 2_ character, as they are, for the most part, the most iconic things in the game. The Huntress and the [Commando](https://riskofrain2.fandom.com/wiki/Commando) are the two playable characters who are unlocked by default, making them and their abilities very recognizable.

After taking a look at all the abilities of those two characters, our choice landed on the Laser Glaive, as it was easy to adapt and didn't clash with any weapon already present in _Dead Cells_.

### Starfury

![](/assets/img/posts/portfolio/dead-cells-updates/32/starfury_terraria.png){: .right}

I was in charge of implementing the [Starfury](https://deadcells.wiki.gg/wiki/Starfury). This weapon is inspired by the [sword of the same name](https://terraria.fandom.com/wiki/Starfury) in _Terraria_, which has a similar effect. 

On hit, the weapon summons a shooting star off-screen, that falls down on a near enemy. This projectile is seeking and ignores collisions (unless it misses its target, which can happen if it dies or moves around too quickly, in which case the projectile will crash on the ground).

![](/assets/img/posts/portfolio/dead-cells-updates/32/starfury.gif)
_Gif of the Starfury being used in-game._

While one of the artist took care of the weapon model and character animation, I handled the visual part of the projectile, including the trail, visual feedbacks, particles and explosion effect.

### Minor missions

- Bunch of [bug fixes](https://deadcells.wiki.gg/wiki/Version_3.2#Bug_fixes).