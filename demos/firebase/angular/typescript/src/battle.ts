import {Component} from '@angular/core';

import {subscribe,nudge} from '../../../nudger.js'

@Component({
  selector: 'battle',
  template: `
    <div *ngIf="loaded">
      <button *ngFor="let t of teams" (click)="nudge(t)">
        {{t}} ({{status[t]}})
      </button>
    </div>
    <div *ngIf="!loaded">
      Fetching data...
    </div>
  `
})
export class Battle {
  loaded = false
  status = {}
  teams = []
  nudge:Function = nudge
  constructor() {
    subscribe(val=>{
      this.status = val
      this.teams = Object.keys(this.status).sort()
      this.loaded = true
    })
  }
}