---
layout: post
post_type: portfolio
permalink: /portfolio/dead-cells-updates/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

dead_cells: true

title: DLC - The Queen and the Sea
summary: 'The third paid extension for Dead Cells, adding new biomes, new weapons, new enemies, and new bosses.'
image: /assets/img/posts/portfolio/dead-cells-updates/27/header.jpg
show_image: true
date: 2022-01-06
tags: [Programming,Haxe]
invisible: true
---

## Introduction

**The Queen and the Sea** DLC, also known as update 2.7, is the third paid expansion for _Dead Cells_, as well as the first one I worked on.

Following its predecessors, this DLC aims to add new content. The first DLC added early-game content, the second one focused on mid-game, and this one is targeted towards late-game.

### Notable additions and changes

- **NEW** - Two new end-game biomes.
  - [Infested Shipwreck](https://deadcells.wiki.gg/wiki/Infested_Shipwreck), an amalgation of abandoned and crashed ships at the base of the lighthouse.
  - [The Lighthouse](https://deadcells.wiki.gg/wiki/Lighthouse), a biome that also acts as a level-long boss, with three powerful enemies trying to stop your ascent to the top.
- **NEW** - Two new end-game bosses.
  - [The Servants](https://deadcells.wiki.gg/wiki/The_Servants), a group of three enemies that work together to stop your ascent of the lighthouse.
  - [The Queen](https://deadcells.wiki.gg/wiki/The_Queen), a new alternative final boss, awaiting you at the top of the lighthouse.
- **NEW** - New weapons and skills.
  - 6 Melee weapons.
  - 2 Ranged weapons.
  - 2 Skills.

![](/assets/img/posts/portfolio/dead-cells-updates/27/servants_fight.jpg)
_The Servants trying to stop the player from climbing the lighthouse._

> A full list of changes can be found on the [Dead Cells Wiki](https://deadcells.wiki.gg/wiki/Version_2.7).
{: .prompt-info }

## What I worked on

When I started working on the DLC, most of its content had already been developed by the old Dead Cells team. My work was mostly focused on polishing content and adding minor features.

### Leghugger special unlock

![](/assets/img/posts/portfolio/dead-cells-updates/27/leghugger.png){: .right}
The [Leghugger](https://deadcells.wiki.gg/wiki/Leghugger) is one of the skills added in the DLC, letting the player summon a friendly version of one of the Shipwreck enemies. Every skill and weapon in Dead Cells has an unlock condition. Most of them are found through random drop chances on certain enemies, but some have special quests or missions attached to them. The Leghugger is one of them, and I was tasked with implementing that unlock condition.

After meeting the new [Fisherman](https://deadcells.wiki.gg/wiki/The_Fisherman) NPC in the Toxic Sewers, and as part of the storyline of the DLC, the player is tasked to go to a specific house in [Stilt Village](https://deadcells.wiki.gg/wiki/Stilt_Village). There, they will encounter an enemy that normally only appears in Infested Shipwreck, and after defeating it, a cutscene will play, unlocking the Leghugger.

I was tasked with designing and implementing this cutscene. You can see it in the video below.

{% include embed/youtube.html id='7-OLdTJRzwA' %}

### Abyssal Trident special unlock

![](/assets/img/posts/portfolio/dead-cells-updates/27/trident_room.png){: width="300" .right}
The [Abyssal Trident](https://deadcells.wiki.gg/wiki/Abyssal_Trident) is another weapon in the DLC with a special unlock. The player must explore the [Infested Shipwreck](https://deadcells.wiki.gg/wiki/Infested_Shipwreck) and look for four map pieces that randomly drop from enemies. Once they've all been gathered, an X appears on the map, marking the location of a hidden key, which opens a door to a special room, where the weapon can be found.

I was tasked with designing and implementing this quest, from the map piece mechanic to the unlock cutscene. The idea of having a hidden room in the biome was already defined, but the specifics were of my choosing.

You can see a demonstration of it in the video below.

{% include embed/youtube.html id='7-OLdTJRzwA' t='124' %}

### Special transition to Infested Shipwreck

When unlocking the Leghugger, the player can also find a [Crowned Key](https://deadcells.wiki.gg/wiki/Pickups#Crowned_Key), which opens a door to Infested Shipwreck right before the player reaches the [High Peak Castle](https://deadcells.wiki.gg/wiki/High_Peak_Castle).

This door leads to a special room, descending down from the castle to the docks of the island, where the Fisherman can be found waiting for the player on his boat. Talking with the Fisherman will start a cutscene, bringing the player to Infested Shipwreck.

You can see a demonstration of it in the video below.

{% include embed/youtube.html id='evG1rtL0MW0' t='125' %}

The idea of this special transition was my own pitch, and as such I had complete creative freedom on its design and implementation. I had the support of an artist, who made all the visual assets related to the dock, NPC and boat, while the overall look of the room is reused from an earlier biome.

I took on tasks such as:
- Fully designing the room in Tiled and decorating it with reused and new assets.
- Designing and implementing the cutscene with the NPC, including movement and particle effects.
- Implementing NPC animations made by the artist.
- Implementing NPC dialogue.

The goal of this room was to make the transition from High Peak Castle to Infested Shipwreck make sense. Throughout a run, it is implied that the player "climbs" the island, with the later biomes being ater the [Clock Tower](https://deadcells.wiki.gg/wiki/Clock_Tower), a notably vertical level.

As such, we make the player climb down the side of a cliff, to reach sea level again.

![](/assets/img/posts/portfolio/dead-cells-updates/27/shipwreck_transition_room.png)
_Screenshot of the room in Tiled. The player starts on the top left, and the NPC can be found on the bottom right._

To save on production time, the room reuses the visual identity of the [Undying Shores](https://deadcells.wiki.gg/wiki/Undying_Shores). This specific biome was chosen since it also takes place on the side of a cliff, and because of the visible lighthouse in the background.

![](/assets/img/posts/portfolio/dead-cells-updates/27/shores_vs_shipwreck_trans.png)
_On the left, screenshot of Undying Shores. On the right, screenshot of the transition room._

### Minor missions

- Tweaks on the [Queen](https://deadcells.wiki.gg/wiki/The_Queen) boss fight.
  - On my first time testing the fight, I managed to easily cheese it by using knockback weapons and constanly pushing her off the side of the arena, dealing damage to her. I later implemented a system that detects the number of times the Queen has been thrown off, and [teleports her back on the arena](https://deadcells.wiki.gg/wiki/The_Queen#Knockback/CC) with a special attack and dialogue if the player attempts that strategy too many times.

- Bunch of [bug fixes](https://deadcells.wiki.gg/wiki/Version_2.7#Bug_fixes).