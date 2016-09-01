---
title: With a composition helper
author: krawaller
---

This CycleJS implementation of the app leans heavily on the composition helper introduced [here](https://twitter.com/krawaller/status/743150786117517312).

This means that the parent->child communications are visible in the `withComponent` calls. For instance here's the corresponding line from the `field` component...

```
export default withComponent(Field,Confirm,'disabled$')
```

...showing how `Field` will pass the `disabled$` sink as a source to `Confirm`.

