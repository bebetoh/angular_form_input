import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoopBackComponent } from './loop-back.component';

import { ClickMeComponent } from './click-me.component';


@NgModule({
  declarations: [
    AppComponent,
    LoopBackComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
