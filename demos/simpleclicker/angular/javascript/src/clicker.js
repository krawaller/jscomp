import {Component} from '@angular/core'

let Clicker = Component({
  selector: '#app',
  template: `
    <p>{{count}} bottles of beer on the wall</p>
    <button (click)="more()">Buy more</button>
  `
}).Class({
  constructor: function () {
    this.count = 3
  },
  more () {
    this.count++
  }
})

export default Clicker
