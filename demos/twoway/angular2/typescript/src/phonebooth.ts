import {Component,ViewChild} from '@angular/core';

@Component({
  selector: 'phonebooth',
  template: `
    <input #field [(ngModel)]="name"><br/>
    <p>Your name is {{name}}.</p>
    <button (click)="change()">Put on costume</button>
  `
})
export class Phonebooth {
  @ViewChild('field') input
  name = 'Steve'
  change() {
    this.name = 'Batman'
    this.input.nativeElement.focus()
  }
}