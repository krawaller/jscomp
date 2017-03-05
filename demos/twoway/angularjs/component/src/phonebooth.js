import angular from 'angular'

angular.module('phoneboothapp')
  .component('phonebooth', {
    template: `
      <input ng-model="$ctrl.name"><br/>
      <p>Your name is {{$ctrl.name}}.</p>
      <button ng-click="$ctrl.change()">Put on costume</button>
    `,
    controller: class Phonebooth {
      constructor ($element) {
        this.field = $element.find('input')[0]
        this.name = 'Steve'
      }
      change () {
        this.name = 'Batman'
        this.field.focus()
      }
    }
  })
