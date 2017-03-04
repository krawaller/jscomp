import 'zone.js'
import 'reflect-metadata'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import Clicker from './clicker'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

let appModule = NgModule({
  imports: [ BrowserModule ],
  declarations: [ Clicker ],
  bootstrap: [ Clicker ]
}).Class({
  constructor: function () {}
})

platformBrowserDynamic().bootstrapModule(appModule)
