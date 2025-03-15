import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  encapsulation: ViewEncapsulation.Emulated // This is the default, but explicitly setting it.

})
export class ProductsComponent {
  @Input() product: { name: string; image: string; price: number; description: string } | undefined;

  }
