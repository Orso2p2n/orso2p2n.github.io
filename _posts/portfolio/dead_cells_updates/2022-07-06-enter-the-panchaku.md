---
layout: post
post_type: portfolio
permalink: /portfolio/dead-cells-updates/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

dead_cells: true

title: Version 3.0 - Enter the Panchaku
summary: 'Balancing update, reworking legendary items to make them more unique.'
image: /assets/img/posts/portfolio/dead-cells-updates/30/header.png
show_image: true
date: 2022-08-03
tags: [Programming,Haxe]
invisible: true
---

## Introduction

Update 3.0, officially named **Enter the Panchaku**, was a minor update that didn't add much content, instead focusing on reworking or rebalancing some aspects of the game.

### Notable additions and changes

- **NEW** - [Weapon](https://deadcells.wiki.gg/wiki/Panchaku) and [outfit](https://deadcells.wiki.gg/wiki/Outfits#Trailer_Bobby_Outfit) inspired by the [animated trailer for the Bad Seed DLC](https://youtu.be/MqlDDiEL6tE)
  - The Panchaku and Bobby Outfit were long awaited community suggestions, and were finally added to the game.
- **NEW** - Crossover content with _Soul Knight_
  - A [weapon](https://deadcells.wiki.gg/wiki/Magic_Bow) and [outfit](https://deadcells.wiki.gg/wiki/Outfits#Knight's_Outfit) in collaboration with _Soul Knight_. This content was originally developed for the mobile version of _Dead Cells_, and was brought to all platforms in this update.
- **REWORK** - [Legendary items](https://deadcells.wiki.gg/wiki/Gear#Legendary_items)
  - Legendary items now have special unique affixes that specifically interacts and improves their effect.

{% include embed/youtube.html id='zlPJBqtiZKc' %}

> A full list of changes can be found on the [Dead Cells Wiki](https://deadcells.wiki.gg/wiki/Version_3.0).
{: .prompt-info }

## What I worked on

### Custom head system

The Bobby Outfit had a special feature, as it included a custom animated flame as a head.

The _Dead Cells_ main character is composed of 2 parts:
- The body, [animated in 3D and exported as pixel art](https://www.gamedeveloper.com/production/art-design-deep-dive-using-a-3d-pipeline-for-2d-animation-in-i-dead-cells-i-).
- The head, a clump of real-time generated particles meant to resemble smoke.

![](/assets/img/posts/portfolio/dead-cells-updates/30/body_with_no_head.png)
_Dead Cells' main character's body, without the head._

> Some special outfits, like the [Winter Outfit](https://deadcells.wiki.gg/wiki/Outfits#Winter_Outfit) or the [Cultist Outfit](https://deadcells.wiki.gg/wiki/Outfits#Cultist_Outfit), disable the particle head entirely, as it is instead part of the body's 3D model.
{: .prompt-info }

For the Bobby Outfit, we wanted to pay homage to the iconic look of the character in the [trailers by Bobby Prod](http://bobbyprod.com/projets/dead-cells/), so we decided to replace the real-time particles with a hand-animated pink flame.

![Alt text](/assets/img/posts/portfolio/dead-cells-updates/30/particles_vs_bobby.png)
_On the left, the classic head, on the right, the Bobby head._

This was not possible out of the box, so we had to create a system to support hand-animated sprites as a head. We needed to be able to play different animations depending on the character state (idle, falling, running...), play transitions between those animations, support displaying the head behind the body (needed for a lot of attack animations), etc.

This system was made to be **entirely data-driven**, with all data regarding custom heads being in the game's editable database. This meant that artists could easily test and tweak their work in-game without touching any code.

![](/assets/img/posts/portfolio/dead-cells-updates/30/custom_head_anim_support.png)
_Player states that trigger special anims include: idle, running, falling, and attacking._

This custom head system was very easy to extend upon, and was used to add all the custom heads of [Update 3.5](/portfolio/dead-cells-updates/queen-and-the-sea/).

### Legendary rework

[Legendary items](https://deadcells.wiki.gg/wiki/Gear#Legendary_items) are rare powerful versions of weapons and skills that the player can find throughout a run. They used to have a non-intuitive system to make them more powerful, where they would scale on the player's highest two stats, instead of only the highest.

We decided to rework this system to make them feel more unique, and the solution we implemented was to have a special, non-random, chosen "[legendary affix](https://deadcells.wiki.gg/wiki/Affixes#Legendary_affixes)" per weapon. This affix is usually a very powerful effect that either changes the way the weapon is played, or drastically improves its power.

Some legendary affixes I took care of implementing were:
- **Golden Damage**, for the [Greed Shield](https://deadcells.wiki.gg/wiki/Greed_Shield).
  - Increases the amount of damage dealt by the shield's parries, depending on the amount of gold that the player has.
  - Synergizes quite well with the weapon, as its effect is to give gold for each attack parried.
- **Double Bullets** and **Triple Bullets**, for the [Multiple-nocks Bow](https://deadcells.wiki.gg/wiki/Multiple-nocks_Bow) or [Maw of the Deep](https://deadcells.wiki.gg/wiki/Maw_of_the_Deep).
  - Fires either two or three times the amount of projectiles, to deal extreme damage and cover a bigger area.
  - While multiple weapons get this affix, and the intended effect is the same, the specific implementation is different for each. Some might have a slight angle difference between each projectile, or a delay. Tweaking the effect allows us to make sure it works as best a it can for every weapon.
- **Echo**, for the [Cluster Grenade](https://deadcells.wiki.gg/wiki/Cluster_Grenade) or [Magnetic Grenade](https://deadcells.wiki.gg/wiki/Magnetic_Grenade).
  - The grenade triggers its explosion a second time a short time after triggering it once.
  - Similarly to the Double or Triple Bullets, the effect acts slightly differently for each grenade.

### Minor missions

- Bunch of [bug fixes](https://deadcells.wiki.gg/wiki/Version_3.0#Bug_fixes).
- 
## Official videos

#### Dev Thoughts

{% include embed/youtube.html id='HbDcWYRv9pM' %}