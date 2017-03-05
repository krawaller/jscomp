import angular from 'angular'

import list from '../../../goods'

angular.module('dropdownapp')
  .component('dropdown', {
    template: `
      <div ng-class="{fruit: $ctrl.chosen.type === 'fruit', veggie: $ctrl.chosen.type === 'vegetable'}">
        I posit that 
        <select ng-model="$ctrl.chosen" ng-options="g.name for g in $ctrl.list"></select>
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
