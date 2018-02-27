import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoopBackComponent } from './loop-back.component';

import { ClickMeComponent } from './click-me.component';

import { KeyUpComponent_v1 } from './keyup.components';


@NgModule({
  declarations: [
    AppComponent,
    LoopBackComponent,
    ClickMeComponent,
    KeyUpComponent_v1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
