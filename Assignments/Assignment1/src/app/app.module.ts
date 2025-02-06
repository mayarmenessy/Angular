import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Component } from './Question1/q1/q1.component';
import { FormsModule } from '@angular/forms';
import { Q2Component } from './Question1/q2/q2/q2.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
