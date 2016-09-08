import angular from 'angular'

angular.module('app.clicker',[])
  .controller('clickerctrl',function(){
    this.count = 3;
    this.more = () => this.count++
  })
  .component('clicker',{
    template: `
      <p>{{$ctrl.count}} bottles of beer on the wall</p>
      <button ng-click="$ctrl.more()">Buy more</button>
    `,
    controller: 'clickerctrl'
  })

export default 'app.clicker'