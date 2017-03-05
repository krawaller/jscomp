import {Component} from '@angular/core';

import {goods} from '../../../goods.js'

@Component({
  selector: '#app',
  template: `
    <div [class.veggie]="chosen.type === 'vegetable'" [class.fruit]="chosen.type === 'fruit'">
      I posit that 
      <select [(ngModel)]="chosen">
        <option [ngValue]="g" *ngFor="let g of goods">
          {{g.name}}
        </option>
      </select>
      {{chosen.quote}}
    </div>
  `
})
export class Dropdown {
  goods = goods
  chosen = this.goods[0]
}
