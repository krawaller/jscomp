import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import Clicker from './clicker';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

let Root = Component({
  selector: '#app',
  template: '<clicker></clicker>'
}).Class({
  constructor: function() {}
});

let appModule = NgModule({
  imports: [ BrowserModule ],
  declarations: [ Clicker, Root ],
  bootstrap: [ Root ]
}).Class({
  constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(appModule);