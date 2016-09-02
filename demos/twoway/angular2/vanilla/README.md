---
title: A vanilla implementation
author: krawaller
language: typescript
maindep: '@angular/core'
---

This is an idiomatic Angular 2 solution without any surprises.

We could manipulate `name` directly in the button event handler by defining it like this:

```html
<button (click)="name = 'Batman'">
```

But since we're supposed to behave and keep logic out of the view, I defined a method on the class instead.
