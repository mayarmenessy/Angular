import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { TextColorDirective } from './text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    HoverHighlightDirective,
    TextColorDirective
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
