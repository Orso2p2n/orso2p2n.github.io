---
layout: post
post_type: portfolio
permalink: /portfolio/dead-cells-updates/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

dead_cells: true

title: Version 2.9 - Breaking Barriers
summary: 'A whole lot of new accessibility options: Assist Mode, visual aids, gameplay settings...'
image: /assets/img/posts/portfolio/dead-cells-updates/29/header.png
show_image: true
date: 2022-06-23
tags: [Programming,Haxe]
invisible: true
---

## Introduction

Update 2.9, officially named **Breaking Barriers**, was focused on adding many accessibility options to the game, from visual aids to a full assist mode.

### Notable additions and changes

- **NEW** - [Assist Mode](https://deadcells.wiki.gg/wiki/Assist_Mode_and_Accessibility#Assist_Mode)
  - Available in the options menu, lets the player adjust the difficulty of the game by tweaking settings.
- **NEW** - [Bunch of visual accessibility options](https://deadcells.wiki.gg/wiki/Assist_Mode_and_Accessibility#Accessibility_Settings)
  - A lot of options letting the player change some visual aspects of the game to help readability.
- **NEW** - [Bunch of gameplay and customization options](https://deadcells.wiki.gg/wiki/Assist_Mode_and_Accessibility#Additional_Settings)
  - More accessibility options, but centered around things like gameplay, sound, or icons.

![](/assets/img/posts/portfolio/dead-cells-updates/29/outline.png)
_Screenshot of the game with the "customizable outlines" option on._

> A full list of changes can be found on the [Dead Cells Wiki](https://deadcells.wiki.gg/wiki/Version_2.9).
{: .prompt-info }

## What I worked on

I was the main programmer on this update, and I am very proud oh the accessibility options we were able to bring to the game.

Before starting the development of the update, we [opened a conversation with the _Dead Cells_ community](https://twitter.com/motiontwin/status/1483059164901433345), and gathered as much feedback as we could, allowing us to get an extensive list of potential features, that we sorted by relevance and difficulty of implementation. 

We had two major guidelines that we tried to follow as close as possible during development: **add as many features as possible** and make them **as customizable as possible**. If a feature could help at least one person, then it was worth looking into.

As development continued, we reached out to [AbleGamers](https://ablegamers.org/) and organized a test panel with them. They gave us very valuable feedback that we applied as thoroughly as possible, and it helped us correct some things that we missed.

### Input options

In terms of input, we had a few goals in mind:
- Allow the game to be played with any controller.
- Remove any need for held or consecutive inputs.

The first step was to rework all non-rebindable actions in the game, as well as all that needed a combination of inputs, and give them alternatives. Here's the list of all the actions that were changed this way:

| Action                | Original input                    | Added alternatives                                                              |
| --------------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| Secondary Interaction | Long press on the Interact button | - Custom bind                                                                   |
| Dive Attack           | Hold down + Press Jump button     | - Hold down while airborne<br>- Double tap down while airborne<br>- Custom bind |

Additionally, both controller sticks and the D-Pad had one function and one function only, and were not rebindable. This was changed:

| Input       | Original Function    | Added alternatives                                   |
| ----------- | -------------------- | ---------------------------------------------------- |
| Left stick  | Moving the character | - Camera movement<br>- Treat as rebindable inputs    |
| Right stick | Moving the camera    | - Character Movement<br>- Treat as rebindable inputs |
| D-Pad       | Rebindable inputs    | - Character movement<br>- Camera movement            |

Opening such input customization is the key to making the game work with any kind of controller.

There were still some problematic actions, that were solved not through rebindable inputs, but by adding ways to bypass them entirely:

| Action               | Problematic input                                                                 | Implemented solution                                                               |
| -------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Double jump          | Requires the player to press the Jump button twice                                | "Hold to jump" option. The character will jump as long as the Jump button is held  |
| Chaining rolls       | The player is sometimes required to press the Roll button multiple times in a row | "Hold to roll" option. The character will roll as long as the Roll button is held  |
| Holding a shield out | Requires the player to hold down the Shield button                                | "Toggle shield" option. The shield will stay out until the button is pressed again |

_Note: unfortunately, some of these options do still require the player to hold down a button, as completely removing that scenario proved tricky. We settled on this middleground, where the important part was to offer an alternative to the players who might need it._

### Customisable stats colors

_Dead Cells_ has 3 differents [stats](https://deadcells.wiki.gg/wiki/Stats) that the player can invest into: **Brutality**, **Tactics** and **Survival**. Those stats are present all throughout the game, and interact with of a lot of elements: the player's health scales with their stats, weapons all have assigned stats that their damage will scale on, etc.

The stats can be increased throughout a run by finding [scrolls](https://deadcells.wiki.gg/wiki/Pickups#Scrolls).

![](/assets/img/posts/portfolio/dead-cells-updates/29/scroll_screen.png)
_Menu where the player can choose which stat to increase, upon picking up a scroll._

Each stat is represented by an icon and a color. <span style="color:salmon">Brutality</span> is red, <span style="color:plum">Tactics</span> is purple and <span style="color:palegreen">Survival</span> is green.

Even though each stat has an icon associated to it, sometimes only the color is used, and thus, to ensure maximum readability for everyone, we added an option to freely change their colors.

We had to add a new option widget that lets the player choose a color. Option widgets are elements that the player can interact with to change a value. They exist in multiple forms: checkbox, radio buttons, list, or even slider. The color widget is new to this update and was used in every place where the player needs to personalize a color.

![](/assets/img/posts/portfolio/dead-cells-updates/29/widgets.png)
_Different kinds of option widgets._

![](/assets/img/posts/portfolio/dead-cells-updates/29/color_widget.gif){: width="600"}
_Gif of interacting with the color widget._ 

## Public reception

Apart from DLCs, this was one of the rare instances of a free update escaping "containment" and reaching a public outside of the _Dead Cells_ community.

Articles praising the update can be found on [Eurogamer](https://www.eurogamer.net/dead-cells-big-accessibility-focused-breaking-barriers-update-out-now), [Polygon](https://www.polygon.com/23180668/dead-cells-difficulties-accessibility-options-motion-twin), [PC Gamer](https://www.pcgamer.com/dead-cells-is-getting-accessibility-features-including-an-assist-mode/) or even [Nintendo Life](https://www.nintendolife.com/news/2022/06/dead-cells-accessibility-focused-update-adds-assist-mode-difficulty-options-and-more). It was also covered by [Steve Saylor](https://en.wikipedia.org/wiki/Steve_Saylor), a game critic and Accessibility Advocate.

{% include embed/youtube.html id='72WpfHrXuXs' %}