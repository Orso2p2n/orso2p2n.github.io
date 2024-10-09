---
layout: post
post_type: portfolio
permalink: /portfolio/dead-cells-updates/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

dead_cells: true

title: Version 3.5 - The End is Near
summary: "Update focused on adding new enemies, mutations and weapons interacting with the curse mechanic."
image: /assets/img/posts/portfolio/dead-cells-updates/35/header.png
show_image: true
date: 2023-08-28
tags: [Game Development, Programming,Haxe]
invisible: true
---

## Introduction

Update 3.5, officially named **The End is Near**, was focused on adding features interacting with the [curse](https://deadcells.wiki.gg/wiki/Curse) mechanic. It was the last update I worked on before leaving _Evil Empire_.

### Notable additions and changes

- **NEW** - [Misericorde](https://deadcells.wiki.gg/wiki/Misericorde), [Anathema](https://deadcells.wiki.gg/wiki/Anathema) and [Indulgence](https://deadcells.wiki.gg/wiki/Indulgence)
  - Three weapons that all interact with the curse mechanic.
- **NEW** - [Sore Loser](https://deadcells.wiki.gg/wiki/Sore_Loser), [Curser](https://deadcells.wiki.gg/wiki/Curser) and [Doom Bringer](https://deadcells.wiki.gg/wiki/Doom_Bringer)
  - Three mobs that all interact with the curse mechanic.
- **NEW** - [Cursed Flask](https://deadcells.wiki.gg/wiki/Cursed_Flask), [Damned Vigor](https://deadcells.wiki.gg/wiki/Damned_Vigor), [Demonic Strength](https://deadcells.wiki.gg/wiki/Demonic_Strength)
  - Three mutations that all interact with the curse mechanic.
- **NEW** - 40 [heads](https://deadcells.wiki.gg/wiki/Heads)
  - A bunch of new heads to unlock and freely switch to.

![](/assets/img/posts/portfolio/dead-cells-updates/35/doom_bringer.png)
_Screenshot of a player next to a Doom Bringer._

> A full list of changes can be found on the [Dead Cells Wiki](https://deadcells.wiki.gg/wiki/Version_3.5).
{: .prompt-info }

## What I worked on

### Mobs skills rework

Before update 3.5, the programming team took a month to do a big cleanup of the game's codebase, which was becoming more and more bloated, as well as a rework of a lot of systems to make them more viable long-term or easier to use.

My biggest work during that time was a full rework of the skill system that the mobs use for their attacks, with two major objectives in mind:
- Make them as data-driven as possible.
- If additional code is needed, make it readable and easy to extend.

In code, each mob is defined using its own class, inheriting a common `Mob` class. Upon instantiating a mob, it declares its own attacks by creating instances of a `Skill` class. 

In the database, all the mobs are stored in a big "mobs" sheet, with each line corresponding to a mob. Each entry contains a "skills" entry, which is a sub-sheet containing the data for all of the mob's skills.

![](/assets/img/posts/portfolio/dead-cells-updates/35/mob_sheet.png)
_The mobs sheet in the database._

![](/assets/img/posts/portfolio/dead-cells-updates/35/zombie_skills.png)
_The skills subsheet for the Zombie._

#### How the old system works

When creating the `Skill` instances, we give it a `charge`, `lock` and `cooldown` duration values, as well as an area of detection, and it will then take care of a few generic behaviors:
- Upon triggered, create a timer for the duration of `charge`
- Once the timer ends, lock the AI of the enemy for the duration `lock` and put the skill into cooldown.
- Call public dynamic functions when the charge starts and ends

Then, in the mob's code, we override the public dynamic functions with the actual behavior of the attack. Stuff like animations, sound effects, damage, etc.

While this system works and is easy to use, its main problem is that any generic attack requires a lot of boilerplate code, and any complex attack will create a lot of bloating in the mob's code.

#### How the new system works

Instead of overriding dynamic functions in the mob's code, we now create a class per attack, inheriting the `Skill` class, and override virtual functions.

We also generalize as much behavior as possible and make them data-driven. Stuff like playing animations, playing sound effects, dealing damage, are so common that we want to make them automatic, without needing boilerplate code. And, in case a specific attack needs to disable any common behavior, we make it overridable.

Those common behaviors also now have their own classes, inheriting a `SkillEvent` class, including:
- `SkillAnimation`, stores animation data, contains methods to play the animation, change the speed or duration, make it loop, etc.
- `SkillSfx`, stores sound effect data and methods.
- `SkillArea`, stores area data, contains methods to detect the player in the area, deal damage in the area, etc.
- `SkillProjectile`, stores projectile data, contains methods to spawn the projectile and change its behavior.
- `SkillCommonEffect`, stores a bunch of commonly used effects, like knockback or movement.

All those `SkillEvents` are stored in arrays in the `Skill` class, and connect themselves to signals called at certain points of the skill's behavior.

![](/assets/img/posts/portfolio/dead-cells-updates/35/skill_timeline.png)
_Timeline of a skill, with the corresponding signals._

Every one of those events, the signals they connect to, and their data, can be **defined in the database**. This means that basic attacks can now be fully made with no additional code.

![](/assets/img/posts/portfolio/dead-cells-updates/35/curser_skills.png)
_The skills subsheet for the Curser, using the new system._

And, for more complex attacks, having a separate class and more defined virtual functions makes the code way easier to read and maintain.