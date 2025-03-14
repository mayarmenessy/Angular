import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ServerElementComponent,
    CourseCardComponent,
    CourseImageComponent,
    BasicHighlightDirective,
    HighlightDirective,
    Comp1Component,
    Comp2Component
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
