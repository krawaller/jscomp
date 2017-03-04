import angular from 'angular'

angular.module('clickerapp')
  .controller('clicker', function () {
    this.count = 3
    this.more = () => this.count++
  })
