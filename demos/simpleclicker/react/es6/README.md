---
title: es6 class
author: krawaller
maindep: react
---

No surprises here, this is a vanilla React implementation.

Note that since class methods are not automatically bound to the instance in ES6 classes, we must either bind the method in the constructor, or assign the method in the constructor using an arrow function so that `this` points to the instance.