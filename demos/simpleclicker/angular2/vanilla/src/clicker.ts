import {Component} from '@angular/core';

@Component({
  selector: 'clicker',
  template: `
    <p>{{count}} bottles of beer on the wall</p>
    <button (click)="more()">Buy more</button>
  `
})
export class Clicker {
  count = 3
  more() {
    this.count++
  }
}