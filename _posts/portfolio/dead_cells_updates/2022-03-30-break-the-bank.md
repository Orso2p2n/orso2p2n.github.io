---
layout: post
post_type: portfolio
permalink: /portfolio/dead-cells-updates/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

dead_cells: true

title: Version 2.8 - Break the Bank
summary: 'New gameplay revolving around gold: weapons, enemies, mutations and a special biome.'
image: /assets/img/posts/portfolio/dead-cells-updates/28/header.jpg
date: 2022-03-30
tags: [Programming,Haxe]
invisible: true
---

## Introduction

Update 2.8, officially named **Break the Bank**, was focused on adding new mechanics and features around gold (the game's in-run currency), with a new free biome, as well as a bunch of enemies and weapons.

### Notable additions and changes

- **NEW** - [The Bank](https://deadcells.wiki.gg/wiki/The_Bank)
  - A new biome that can appear at any point in the run, that can replace any other level, with the goal of providing a harder but more rewarding challenge.
- **NEW** - [Gold Digger](https://deadcells.wiki.gg/wiki/Gold_Digger), [Dagger of Profit](https://deadcells.wiki.gg/wiki/Dagger_of_Profit) and [Money Shooter](https://deadcells.wiki.gg/wiki/Money_Shooter)
  - Three weapons that all interact with gold.
- **NEW** - [Midas' Blood](https://deadcells.wiki.gg/wiki/Midas%27_Blood), [Gold Plating](https://deadcells.wiki.gg/wiki/Gold_Plating) and [Get Rich Quick](https://deadcells.wiki.gg/wiki/Get_Rich_Quick).
  - Three [mutations](https://deadcells.wiki.gg/wiki/Mutations) that all interact with gold.
- **NEW** - [Agitated Pickpocket](https://deadcells.wiki.gg/wiki/Agitated_Pickpocket), [Gold Gorger](https://deadcells.wiki.gg/wiki/Gold_Gorger) and [Golden Kamikaze](https://deadcells.wiki.gg/wiki/Golden_Kamikaze).
  - Three enemies that all appear in the Bank.
- **NEW** - [Mimic](https://deadcells.wiki.gg/wiki/Mimic)
  - A mini-boss that can appear in the Bank, randomly replacing one of the shops and attacking the player isf they try buying anything.

> A full list of changes can be found on the [Dead Cells Wiki](https://deadcells.wiki.gg/wiki/Version_2.8).
{: .prompt-info }

## What I worked on

### The weapons

The three weapons added in the update all have mechanics centered around gold:
- **Gold Digger**
  - A melee weapon resembling a pickaxe. Enemies hit with the weapon drop gold, and having enough gold makes it deal critical hits.
- **Dagger of Profit**
  - A dagger that deals critical hits for a few seconds after the player picks up any kind of gold.
- **Money Shooter**
  - A ranged weapons, firing projectiles in the form of nuggets, removing some gold from the player's inventory each time.

![](../../../assets/img/posts/portfolio/dead-cells-updates/28/money_shooter_and_gold_digger.gif)
_Gif of a player using the Money Shooter, then the Gold Digger._

In _Dead Cells_, the player can carry two weapons and three [mutations](https://deadcells.wiki.gg/wiki/Mutations) at a time. The goal was for those to synergize not only with each other, but also with the mutations. Having some mechanics that give, take away or react to gold lets the player combine them and play around with them.

I was tasked with implementing all three of the weapons above. Their overall mechanics were already designed, but I had creative liberty for their implementation and for some specific values (such as the amount of gold used by the Money shooter, or the duration of the Dagger of Profit buff.)

### The Bank level structure



### The Mimic