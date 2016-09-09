---
name: Firebase
summary: conditional rendering, async, services
---

#### Functionality

Show a button for each Hogwarts house, containing the house name and current count. Clicking a button increases the count for that house.

Uses a Firebase backend so that counts are common for all users.

Before any data is loaded it should just show a `Fetching data` message.

#### Rationale

Shows off how the framework handles...

* services
* conditional rendering
* looping over object in template
* asynchronisity


#### Implementation instructions

Create a file `battle` that is rendered from `bootstrap`.

This demo uses a common module, available at '../../../nudger.js'. Here's the source:

```
var firebase = require('firebase/app')
require('firebase/database')

firebase.initializeApp({
  apiKey: "AIzaSyAqWWr5VIuGMdLD8cAY-C2bmUp-9_tYJM8",
  authDomain: "jscomp-potter.firebaseapp.com",
  databaseURL: "https://jscomp-potter.firebaseio.com"
});

module.exports = {
  subscribe: function(cb){
    firebase.database().ref('/').on('value',function(snapshot){
      cb(snapshot.val())
    })
  },
  nudge: function(team){
    firebase.database().ref(team).transaction(function(c){
      return c+1
    })
  }
}
```

Thus you get access to `.subscribe(cb)` and `.nudge(housename)` methods, to be called at compile time and when a button is clicked respectively.

If possible you should introduce this module in the framework's service-handling functionality.