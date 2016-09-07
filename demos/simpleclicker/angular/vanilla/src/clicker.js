import angular from 'angular'

angular.module('app.clicker',[])
  .component('clicker',{
    template: `
      <p>{{$ctrl.count}} bottles of beer on the wall</p>
      <button ng-click="$ctrl.more()">Buy more</button>
    `,
    bindings: {
      count: '@'
    },
    controller: function(){
      this.count = 3;
      this.more = () => this.count++
    }
  })

export default 'app.clicker'