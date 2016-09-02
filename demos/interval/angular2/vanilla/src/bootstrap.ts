import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Singer } from './singer.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: '#app',
  template: `<singer></singer>`
})
class Root {}

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ Singer,Root ],
    bootstrap:    [ Root ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
