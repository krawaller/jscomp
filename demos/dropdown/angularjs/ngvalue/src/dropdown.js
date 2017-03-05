import angular from 'angular'

import {goods} from '../../../goods'

angular.module('dropdownapp')
  .component('dropdown', {
    template: `
      <div ng-class="{fruit: $ctrl.chosen.type === 'fruit', veggie: $ctrl.chosen.type === 'vegetable'}">
        I posit that 
        <select ng-model="$ctrl.chosen">
           <option ng-repeat="g in $ctrl.goods" ng-value="g">{{g.name}}</option>
        </select>
        {{$ctrl.chosen.quote}}
      </div>
    `,
    controller: class Clicker {
      $onInit () {
        this.goods = goods
        this.chosen = goods[0]
      }
    }
  })
