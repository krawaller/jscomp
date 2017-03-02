import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Battle } from './battle.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: '#app',
  template: `<battle></battle>`
})
class Root {}

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ Battle,Root ],
    bootstrap:    [ Root ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
