import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Phonebooth } from './phonebooth.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: '#app',
  template: `<phonebooth></phonebooth>`
})
class Root {}

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ Phonebooth,Root ],
    bootstrap:    [ Root ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);