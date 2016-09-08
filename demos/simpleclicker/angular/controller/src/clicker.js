import angular from 'angular'

angular.module('app.clicker',[])
  .controller('clicker',['$scope',function($scope){
    $scope.count = 3;
    $scope.more = () => $scope.count++
  }])

export const module = 'app.clicker'
export const template = `
  <div ng-controller="clicker">
    <p>{{count}} bottles of beer on the wall</p>
    <button ng-click="more()">Buy more</button>
  </div>
`