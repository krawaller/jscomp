var app = document.getElementById('app')
app.setAttribute('ng-app', 'app')

import angular from 'angular'
import {module, template} from './clicker'

app.innerHTML = template
angular.module('app', [module])
