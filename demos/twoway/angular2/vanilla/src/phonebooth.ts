import {Component} from '@angular/core';

@Component({
  selector: 'phonebooth',
  template: `
    <input [(ngModel)]="name"><br/>
    <p>Your name is {{name}}.</p>
    <button (click)="change()">Put on costume</button>
  `
})
export class Phonebooth {
  name = 'Steve'
  change() {
    this.name = 'Batman'
  }
}