import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Voter } from './voter.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: '#app',
  template: `<voter></voter>`
})
class Root {}

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ Voter,Root ],
    bootstrap:    [ Root ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
