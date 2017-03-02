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