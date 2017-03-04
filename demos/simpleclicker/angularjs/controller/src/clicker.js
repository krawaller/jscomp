import angular from 'angular'

angular.module('clickerapp')
  .controller('clicker', ['$scope', function ($scope) {
    $scope.count = 3
    $scope.more = () => $scope.count++
  }])
