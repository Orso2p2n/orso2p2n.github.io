---
layout: post
post_type: portfolio
permalink: /portfolio/:title/
hidden: true
panel_includes:
  - toc
tail_includes: ''

title: CastleDB Multifile
summary: "Fork of CastleDB, a structured database with a local web service to edit it."
image: /assets/img/posts/portfolio/cdb/header.png
show_image: true
date_override: 05/2024
tags: [Haxe, Programming, Tool Development]
---

**CastleDB** is a tool initially developed by [Nicolas Cannasse](https://github.com/ncannasse/castle), made to handle structured static data. Everything that is usually stored in XML or JSON files can be stored and modified with CastleDB instead.

Eventually, support for the tool as a standalone was dropped, in favor of implementing it as a library as part of [HIDE](https://github.com/heapsio/hide).

This fork's goal is to provide a standalone, stable version of the CastleDB editor, with added features.

It is based on [Motion Twin's `multifile` branch](https://github.com/motion-twin/castle/tree/multifile), which saves data in multiple files instead of only one, making collaborative work easier.

## Links

- <i class="fa-brands fa-github"></i> - Download and source code on [Github](https://github.com/Orso2p2n/castle-multifile).

## Screenshots

![](/assets/img/posts/portfolio/cdb/cdb-screenshot.png)
_Screenshot of the Dead Cells modding database, in CastleDB._