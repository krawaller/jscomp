---
name: Choo
homepage: "https://choo.io/"
maindep: 'choo'
---

Choo choo choo! The "little framework that could".

Choo is not really designed to be used as a widget within a bigger page. To make that work you must feed these options to Choo:

```
app = choo({href: false, history: false, hash: false})
```

And also initiate the root to the current url:

```
app.router({root: rootElement}, [document.location.pathname, myAppView])
```

The framework author, Yoshua Wuyts, is a vocal opponent of ES2015 cruft, and will mostly use just a subset he calls [ES2020](https://github.com/yoshuawuyts/es2020). We encourage you to try this out as you make Choo implementations!