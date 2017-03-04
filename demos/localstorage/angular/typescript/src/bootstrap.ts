import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Voter } from './voter.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ Voter ],
    bootstrap:    [ Voter ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
