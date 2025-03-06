import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<any>();
  step = 1; // Track the current step
  productData: any = {}; // Temporary storage for product details
  nextStep(name: string, image: string) {
    if (!name || !image) {
      alert("Please fill all fields!");
      return;
    }
    this.productData.name = name;
    this.productData.image = image;
    this.step = 2; // Move to the next step
  }
  // Access input fields
  @ViewChild('nameRef') nameInput!: ElementRef;
  @ViewChild('imageRef') imageInput!: ElementRef;
  @ViewChild('priceRef') priceInput!: ElementRef;
  @ViewChild('descRef') descInput!: ElementRef;

  addProduct() {
    const newProduct = {
      name: this.nameInput.nativeElement.value,
      image: this.imageInput.nativeElement.value,
      price: this.priceInput.nativeElement.value,
      description: this.descInput.nativeElement.value
    };

    // Emit product data
    this.productAdded.emit(newProduct);

    // Clear input fields
    this.nameInput.nativeElement.value = '';
    this.imageInput.nativeElement.value = '';
    this.priceInput.nativeElement.value = '';
    this.descInput.nativeElement.value = '';
  }
}
