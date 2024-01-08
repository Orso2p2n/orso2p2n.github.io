---
layout: post
post_type: portfolio
permalink: /portfolio/dead-cells-updates/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

dead_cells: true

title: Version 2.5 - Practice Makes Perfect
summary: 'Update themed around training, with a new training Room, new items to make runs easier, a world map...'
image: /assets/img/posts/portfolio/dead-cells-updates/25/header.png
show_image: true
date: 2021-09-16
tags: [Programming,Haxe]
invisible: true
---

## Introduction

Update 2.5, officially named **Practice Makes Perfect**, was the first update I worked on upon joining the team.

The goal of the update was to add new quality of life features, in order to ease the game's difficulty curve.

### Notable additions and changes

- **NEW** - Training Room
  - New area in the first level of the game, where the player can go and train against different enemies and bosses, in a completely safe environment.
- **NEW** - Aspects
  - New equippable items, only available before starting a new game, that have powerful effects designed to make the game easier.
- **NEW** - World Map
  - Accessible through a button on the minimap, allows the player to see the connections between the different levels of the game.
- **NEW** - Flawless Outfits
  - Upon killing a boss without taking any damage, the player can unlock a golden outfit representing the boss.

> A full list of changes can be found on the [Dead Cells Wiki](https://deadcells.wiki.gg/wiki/Version_2.5).
{: .prompt-info }

## What I worked on

I was the main programmer working on this update, and thus developed most of its features.

### Training Room

The [Training Room](https://deadcells.wiki.gg/wiki/Training_Room) was _the_ big feature of the update, and after a few brainstorms to define its contents, I was tasked with creating it. It is meant to be a sub-area of the first level, that the player can freely access in order to train with any weapon they want again any enemy/boss they want.

![](/assets/img/posts/portfolio/dead-cells-updates/25/Training_Room_Entrance.jpg)
_Entrance to the Training Room, in the HUB area._

The Training Room is a special, non-procedurally generated level in the game. It is made up of a few rooms, each with its own purpose:
-  Entrance.
-  Weapon Selection, a room with randomly generated gear.
-  Fighting Dojo Door, a door leading to the "Fighting Dojo", aka multiple rooms where the player can freely spawn mobs of their choice.
-  Boss Corridor, a room with doors leading to all bosses in the game.

![](/assets/img/posts/portfolio/dead-cells-updates/25/training-room-map.png)
_Simplified map of the Training Room. Screenshots taken in Tiled._

In order to make the Training Room work, a few systems had to be developed, notably:
- Infinite weapon tubes that constantly generate new weapons.
- Interactive obects that let the player choose which enemy to spawn.
- Buttons to spawn/reset enemies.

![](/assets/img/posts/portfolio/dead-cells-updates/25/Training_Room_Mobs.jpg)
_Mob statues can be interacted with to change their type. The button on the bottom left spawns the chosen enemies._

### Aspects

[Aspects](https://deadcells.wiki.gg/wiki/Aspects) are equippables buffs that the player can equip before starting a new game. Only one can be equipped. They function similarly to [Mutations](https://deadcells.wiki.gg/wiki/Mutations), but with way stronger effects. They also lock post-final-boss progression, and as such are meant as a way for players to have fun with overpowered effects, rather than a true way of progressing through the game.

Aspects are progressively unlocked as the player dies, with a new one being available after each death.

![](/assets/img/posts/portfolio/dead-cells-updates/25/aspects_menu.png)
_Aspects menu, accessible through a NPC in the HUB area._

While the overall idea of the Aspects was already defined, the final effects were designed in tandem by me and the game designer, and I fully handled their technical implementation.

### Minor missions

- [Flawless Outfits](https://deadcells.wiki.gg/wiki/Outfits#Flawless_Concierge_Outfit) are collectibles, unlocked when the player manages to kill a boss without taking any damage. Their implementation was fairly easy, reusing pre-existing systems for dropping loot on bosses, and adding a "flawless" category.

- Bunch of [quality of life changes](https://deadcells.wiki.gg/wiki/Version_2.5#Quality_of_life).

- Bunch of [bug fixes](https://deadcells.wiki.gg/wiki/Version_2.5#Bug_fixes).