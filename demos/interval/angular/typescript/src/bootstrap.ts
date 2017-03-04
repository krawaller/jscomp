import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Singer } from './singer.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ Singer ],
    bootstrap:    [ Singer ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
