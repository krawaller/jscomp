import angular from 'angular'

import list from '../../../goods'

angular.module('dropdownapp')
  .component('dropdown', {
    template: `
      <div ng-class="{fruit: $ctrl.chosen.type === 'fruit', veggie: $ctrl.chosen.type === 'vegetable'}">
        I posit that 
        <select ng-model="$ctrl.chosen">
           <option ng-repeat="g in $ctrl.list" ng-value="g">{{g.name}}</option>
        </select>
        {{$ctrl.chosen.quote}}
      </div>
    `,
    controller: class Clicker {
      $onInit () {
        this.list = list
        this.chosen = list[0]
      }
    }
  })
