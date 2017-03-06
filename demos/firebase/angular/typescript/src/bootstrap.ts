import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Battle } from './battle';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ Battle ],
    bootstrap:    [ Battle ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
