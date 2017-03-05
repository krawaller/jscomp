import 'zone.js';
import 'reflect-metadata';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Dropdown } from './dropdown';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ Dropdown ],
    bootstrap: [ Dropdown ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
