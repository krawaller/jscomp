import 'core-js'
import 'zone.js'
import 'reflect-metadata'

import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core'
import {Form} from './form.ts';

@Component({
  selector: '#app',
  template: `<form></form>`,
  directives: [Form]
})
class Root {}

bootstrap(Root);
