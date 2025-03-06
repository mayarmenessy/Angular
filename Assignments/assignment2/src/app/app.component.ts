import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment2';
  products = [
    {
      name: 'Gaming Laptop',
      image: 'laptop.png',
      price: 1299,
      description: 'A high-performance gaming laptop with a powerful GPU.'
    },
    {
      name: 'Wireless Headphones',
      image: 'laptopp.png',
      price: 199,
      description: 'Noise-canceling wireless headphones with deep bass.'
    },
    {
      name: 'Smartphone',
      image: 'laptoppp.png',
      price: 899,
      description: 'A flagship smartphone with an OLED display and 5G support.'
    }
  ];

  
  addProduct(product: any) {
    this.products.push(product);
  }
}
