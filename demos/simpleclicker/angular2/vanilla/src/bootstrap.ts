import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Clicker } from './clicker.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: '#app',
  template: `<clicker></clicker>`
})
class Root {}

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ Clicker,Root ],
    bootstrap:    [ Root ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
