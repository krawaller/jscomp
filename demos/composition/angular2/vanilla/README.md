---
title: A vanilla implementation
author: krawaller
language: typescript
---

This is an idiomatic Angular 2 solution without any surprises. All communication is clearly defined through the `@Input` and `@Output` decorators.

I opted not to actively store the field value in my model, instead I fetch it from the DOM using a `@ViewChild` reference upon submission. This seems to be a typical Angular approach.