---
title: rxjs
author: krawaller
maindep: '@cycle/dom'
---

Same as the `xstream` implementation but using `rxjs` instead, to see difference in bundle size.

Only code difference is `fold` in `xstream` is called `scan` in `rxjs`.