import {Component} from '@angular/core';

@Component({
  selector: '#app',
  template: `
    <button *ngFor="let t of teams; let i = index" (click)="vote(i)" [class.active]="team===i">{{t}}</button>
  `
})
export class Voter {
  teams = ["Valor","Mystic","Instinct"]
  team = +(localStorage.getItem('JSCOMPVOTE') || 1)
  vote(x) {
    this.team = x;
    localStorage.setItem('JSCOMPVOTE',x)
  }
}