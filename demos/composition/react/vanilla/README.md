---
title: Vanilla
author: krawaller
---

No surprises here, this is a vanilla React implementation with no helpers. All components are stateful. I used `React.createClass` over ES6 classes because of personal preference, no real reasons. 

I opted to have a [controlled input](https://facebook.github.io/react/docs/forms.html#controlled-components) for the `Field` instead of relying on the DOM for storage.