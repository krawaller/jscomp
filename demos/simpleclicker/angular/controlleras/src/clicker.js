import angular from 'angular'

angular.module('app.clicker', [])
  .controller('clicker', function () {
    this.count = 3
    this.more = () => this.count++
  })

export const module = 'app.clicker'
export const template = `
  <div ng-controller="clicker as clckr">
    <p>{{clckr.count}} bottles of beer on the wall</p>
    <button ng-click="clckr.more()">Buy more</button>
  </div>
`
