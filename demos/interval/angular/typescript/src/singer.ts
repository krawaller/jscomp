import {Component, AfterViewInit} from '@angular/core';

import {lyrics} from '../../../lyrics'

@Component({
  selector: '#app',
  template: `{{line}}`
})
export class Singer implements AfterViewInit {
  pos = 0
  get line() {
    return lyrics[this.pos]
  }
  ngAfterViewInit() {
    setInterval(()=> this.pos = (this.pos+1)%4, 1500)
  }
}
