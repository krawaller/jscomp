import 'zone.js'
import 'reflect-metadata'

import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {Form} from './form';
import {Field} from './field'
import {Confirm} from './confirm'

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ Form, Field, Confirm ],
    bootstrap:    [ Form ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
