import 'zone.js'
import 'reflect-metadata'

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Phonebooth } from './phonebooth.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ Phonebooth ],
    bootstrap:    [ Phonebooth ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
