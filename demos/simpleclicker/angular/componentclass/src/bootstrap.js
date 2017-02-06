var app = document.getElementById('app')
app.setAttribute('ng-app', 'app')
app.innerHTML = '<clicker></clicker>'

import angular from 'angular'
import clicker from './clicker'

angular.module('app', [clicker])
