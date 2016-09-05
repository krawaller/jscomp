---
title: vanilla
author: krawaller
maindep: vue
---

No surprises here, this is a vanilla Vue implementation.

* We read from localStorage when the `data` is initialised
* We use the `v-for` directive to render many buttons
* We use `v-bind:class` for dynamic `active` class
* We use `v-on:click="vote($index)"` to actively call the `vote` method with the correct index