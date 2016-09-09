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