import angular from 'angular'

angular.module('app.clicker',[])
  .directive('clicker',function(){
    return {
      restrict: 'E',
      template: `
        <p>{{count}} bottles of beer on the wall</p>
        <button ng-click="more()">Buy more</button>
      `,
      link: function(scope){
        scope.count = 3;
        scope.more = () => scope.count++
      }
    }
  })

export default 'app.clicker'