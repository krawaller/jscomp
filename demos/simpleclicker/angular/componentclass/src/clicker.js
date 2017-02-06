import angular from 'angular'

angular.module('app.clicker', [])
  .component('clicker', {
    template: `
      <p>{{$ctrl.count}} bottles of beer on the wall</p>
      <button ng-click="$ctrl.more()">Buy more</button>
    `,
    controller: class Clicker {
      $onInit () {
        this.count = 3
      }
      more () {
        this.count = this.count + 1
      }
    }
  })

export default 'app.clicker'
